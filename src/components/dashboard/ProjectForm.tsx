import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Upload, X, Loader2 } from "lucide-react";
import { API_URL } from "@/lib/api";

interface ProjectFormProps {
    editMode?: boolean;
    projectId?: string;
}

interface ProjectData {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    location: string;
    year: string;
    client: string;
    scope: string[];
    images: string[];
    challenge: string;
    solution: string;
    result: string;
}

const initialProject: ProjectData = {
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    location: "",
    year: "",
    client: "",
    scope: [],
    images: [],
    challenge: "",
    solution: "",
    result: "",
};

const ProjectForm: React.FC<ProjectFormProps> = ({ editMode = false, projectId }) => {
    const [project, setProject] = useState<ProjectData>(initialProject);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [scopeInput, setScopeInput] = useState("");
    const { toast } = useToast();
    const navigate = useNavigate();

    // New state for local file storage
    const [mainImageFile, setMainImageFile] = useState<File | null>(null);
    const [mainImagePreview, setMainImagePreview] = useState<string>("");
    const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
    const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

    useEffect(() => {
        if (editMode && projectId) {
            fetchProject(projectId);
        }
    }, [editMode, projectId]);

    const fetchProject = async (id: string) => {
        setIsFetching(true);
        try {
            const response = await fetch(`${API_URL}/projects/${id}`);

            if (!response.ok) {
                throw new Error("Erreur lors de la récupération du projet");
            }

            const data = await response.json();
            setProject(data);
        } catch (error) {
            toast({
                title: "Erreur",
                description: "Impossible de récupérer les informations du projet",
                variant: "destructive",
            });
        } finally {
            setIsFetching(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    };

    const handleIdGeneration = () => {
        if (project.title) {
            const generatedId = project.title
                .toLowerCase()
                .replace(/[^\w\s]/gi, "") // Remove special chars
                .replace(/\s+/g, "-"); // Replace spaces with dashes
            setProject({ ...project, id: generatedId });
        }
    };

    const handleScopeAdd = () => {
        if (scopeInput.trim()) {
            setProject({
                ...project,
                scope: [...project.scope, scopeInput.trim()],
            });
            setScopeInput("");
        }
    };

    const handleScopeRemove = (index: number) => {
        const newScope = [...project.scope];
        newScope.splice(index, 1);
        setProject({ ...project, scope: newScope });
    };

    const handleImageRemove = (index: number) => {
        // If in edit mode and using already uploaded images
        if (project.images[index]?.startsWith('http')) {
            const newImages = [...project.images];
            newImages.splice(index, 1);
            setProject({ ...project, images: newImages });
        } else {
            // For locally stored images
            const newFiles = [...galleryFiles];
            const newPreviews = [...galleryPreviews];
            newFiles.splice(index, 1);
            newPreviews.splice(index, 1);
            setGalleryFiles(newFiles);
            setGalleryPreviews(newPreviews);
        }
    };

    const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setMainImageFile(file);

        // Create local preview
        const previewUrl = URL.createObjectURL(file);
        setMainImagePreview(previewUrl);

        // Clear the existing cloudinary URL if there was one
        if (project.image) {
            setProject({ ...project, image: "" });
        }

        toast({
            title: "Image sélectionnée",
            description: "L'image sera téléchargée lors de la soumission du formulaire",
            variant: "default",
        });
    };

    const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setGalleryFiles([...galleryFiles, file]);

        // Create local preview
        const previewUrl = URL.createObjectURL(file);
        setGalleryPreviews([...galleryPreviews, previewUrl]);

        toast({
            title: "Image ajoutée",
            description: "L'image sera téléchargée lors de la soumission du formulaire",
            variant: "default",
        });
    };

    const removeMainImage = () => {
        setMainImageFile(null);
        setMainImagePreview("");
        setProject({ ...project, image: "" });
    };

    const removeLocalGalleryImage = (index: number) => {
        const newFiles = [...galleryFiles];
        const newPreviews = [...galleryPreviews];
        newFiles.splice(index, 1);
        newPreviews.splice(index, 1);
        setGalleryFiles(newFiles);
        setGalleryPreviews(newPreviews);
    };

    // Function to upload a single image to Cloudinary
    const uploadToCloudinary = async (file: File): Promise<string> => {
        console.log(`Preparing to upload file: ${file.name}, size: ${file.size} bytes`);

        const formData = new FormData();
        formData.append("image", file);

        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
        if (!userInfo.token) {
            throw new Error("Utilisateur non authentifié");
        }

        try {
            console.log("Sending upload request to server...");
            const response = await fetch(`${API_URL}/upload`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
                body: formData,
            });

            const data = await response.json();
            console.log("Server response:", data);

            if (!response.ok) {
                console.error("Upload failed:", data.message || response.statusText);
                throw new Error(data.message || "Erreur lors du téléchargement de l'image");
            }

            console.log("Upload successful, image URL:", data.imageUrl);
            return data.imageUrl;
        } catch (error) {
            console.error("Upload error:", error);
            throw error;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

            if (!userInfo.token) {
                throw new Error("Utilisateur non authentifié");
            }

            // Project data to be submitted
            const projectToSubmit = { ...project };

            // Upload main image if it exists
            if (mainImageFile) {
                setUploadingImage(true);
                console.log("Uploading main image...");
                try {
                    const mainImageUrl = await uploadToCloudinary(mainImageFile);
                    projectToSubmit.image = mainImageUrl;
                    console.log("Main image uploaded successfully");
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : "Erreur de téléchargement";
                    console.error("Main image upload failed:", errorMessage);
                    toast({
                        title: "Erreur d'image principale",
                        description: errorMessage,
                        variant: "destructive",
                    });
                    setIsLoading(false);
                    setUploadingImage(false);
                    return;
                }
            }

            // Upload gallery images if they exist
            if (galleryFiles.length > 0) {
                console.log(`Uploading ${galleryFiles.length} gallery images...`);
                const galleryUrls = [...projectToSubmit.images]; // Keep existing remote images

                // Upload images one by one
                for (let i = 0; i < galleryFiles.length; i++) {
                    const file = galleryFiles[i];
                    console.log(`Processing gallery image ${i + 1} of ${galleryFiles.length}`);

                    try {
                        const imageUrl = await uploadToCloudinary(file);
                        galleryUrls.push(imageUrl);
                        console.log(`Gallery image ${i + 1} uploaded successfully`);
                    } catch (error) {
                        const errorMessage = error instanceof Error ? error.message : "Erreur de téléchargement";
                        console.error(`Gallery image ${i + 1} upload failed:`, errorMessage);
                        toast({
                            title: `Erreur image ${i + 1}`,
                            description: errorMessage,
                            variant: "destructive",
                        });
                        // Continue with other images
                    }
                }

                projectToSubmit.images = galleryUrls;
                console.log("All gallery images processed, continuing with project save");
            }

            setUploadingImage(false);
            console.log("Saving project data:", projectToSubmit);

            const method = editMode ? "PUT" : "POST";
            const url =
                editMode && projectId
                    ? `${API_URL}/projects/${projectId}`
                    : `${API_URL}/projects`;

            console.log(`Submitting project to: ${url} with method ${method}`);

            // Ensure required fields are present
            if (!projectToSubmit.title || !projectToSubmit.description) {
                throw new Error("Veuillez remplir tous les champs obligatoires");
            }

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
                body: JSON.stringify(projectToSubmit),
            });

            const responseData = await response.json();
            console.log("Project save response:", responseData);

            if (!response.ok) {
                throw new Error(responseData.message || `Erreur lors de ${editMode ? "la mise à jour" : "la création"} du projet`);
            }

            toast({
                title: editMode ? "Projet mis à jour" : "Projet créé",
                description: editMode
                    ? "Le projet a été mis à jour avec succès"
                    : "Le nouveau projet a été créé avec succès",
                variant: "default",
            });

            navigate("/dashboard/projects");
        } catch (error) {
            console.error("Form submission error:", error);
            const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue";
            toast({
                title: "Erreur",
                description: errorMessage,
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
            setUploadingImage(false);
        }
    };

    if (isFetching) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2">Chargement du projet...</span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">{editMode ? "Modifier le projet" : "Nouveau projet"}</h2>
                <p className="text-muted-foreground">
                    {editMode
                        ? "Modifiez les informations du projet existant"
                        : "Remplissez les informations pour créer un nouveau projet"}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="title">Titre du projet *</Label>
                        <Input
                            id="title"
                            name="title"
                            value={project.title}
                            onChange={handleInputChange}
                            required
                            placeholder="Villa Moderne à Paris"
                        />
                    </div>

                    <div>
                        <Label htmlFor="id">Identifiant URL *</Label>
                        <div className="flex gap-2">
                            <Input
                                id="id"
                                name="id"
                                value={project.id}
                                onChange={handleInputChange}
                                required
                                placeholder="villa-moderne-paris"
                            />
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleIdGeneration}
                            >
                                Générer
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Utilisé dans l'URL: /projects/{project.id || "exemple-projet"}
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={project.description}
                            onChange={handleInputChange}
                            required
                            placeholder="Description détaillée du projet..."
                            className="min-h-[100px]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="category">Catégorie *</Label>
                            <Input
                                id="category"
                                name="category"
                                value={project.category}
                                onChange={handleInputChange}
                                required
                                placeholder="Maison individuelle"
                            />
                        </div>

                        <div>
                            <Label htmlFor="year">Année *</Label>
                            <Input
                                id="year"
                                name="year"
                                value={project.year}
                                onChange={handleInputChange}
                                required
                                placeholder="2023"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="location">Localisation *</Label>
                            <Input
                                id="location"
                                name="location"
                                value={project.location}
                                onChange={handleInputChange}
                                required
                                placeholder="Paris, France"
                            />
                        </div>

                        <div>
                            <Label htmlFor="client">Client *</Label>
                            <Input
                                id="client"
                                name="client"
                                value={project.client}
                                onChange={handleInputChange}
                                required
                                placeholder="Famille Durand"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <Label>Image principale *</Label>
                        <div className="mt-2">
                            {project.image ? (
                                <div className="relative rounded-md overflow-hidden border">
                                    <img
                                        src={project.image}
                                        alt="Preview"
                                        className="w-full h-48 object-cover"
                                    />
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        className="absolute top-2 right-2"
                                        onClick={() => setProject({ ...project, image: "" })}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ) : mainImagePreview ? (
                                <div className="relative rounded-md overflow-hidden border">
                                    <img
                                        src={mainImagePreview}
                                        alt="Preview"
                                        className="w-full h-48 object-cover"
                                    />
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        className="absolute top-2 right-2"
                                        onClick={removeMainImage}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                                        En attente de téléchargement
                                    </div>
                                </div>
                            ) : (
                                <div className="border border-dashed rounded-md p-6 text-center">
                                    <div className="space-y-2">
                                        <div className="flex justify-center">
                                            <Upload className="h-6 w-6 text-muted-foreground" />
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            <label htmlFor="main-image-upload" className="cursor-pointer text-primary hover:underline">
                                                Sélectionner une image
                                            </label>
                                            <Input
                                                id="main-image-upload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleMainImageUpload}
                                                className="hidden"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label>Champs d'intervention *</Label>
                        <div className="flex items-center gap-2 mt-2">
                            <Input
                                value={scopeInput}
                                onChange={(e) => setScopeInput(e.target.value)}
                                placeholder="Ex: Architecture, Construction..."
                            />
                            <Button type="button" onClick={handleScopeAdd}>
                                Ajouter
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.scope.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1"
                                >
                                    <span>{item}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleScopeRemove(index)}
                                        className="text-gray-500 hover:text-red-500"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </div>
                            ))}
                            {project.scope.length === 0 && (
                                <p className="text-sm text-muted-foreground">
                                    Ajoutez des champs d'intervention pour ce projet
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label>Galerie d'images *</Label>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            {/* Existing uploaded images */}
                            {project.images.map((img, index) => (
                                <div key={`cloud-${index}`} className="relative rounded-md overflow-hidden border h-24">
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        className="absolute top-1 right-1 h-6 w-6 p-0"
                                        onClick={() => handleImageRemove(index)}
                                    >
                                        <X className="h-3 w-3" />
                                    </Button>
                                </div>
                            ))}

                            {/* Local preview images */}
                            {galleryPreviews.map((preview, index) => (
                                <div key={`local-${index}`} className="relative rounded-md overflow-hidden border h-24">
                                    <img
                                        src={preview}
                                        alt={`New Gallery ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        className="absolute top-1 right-1 h-6 w-6 p-0"
                                        onClick={() => removeLocalGalleryImage(index)}
                                    >
                                        <X className="h-3 w-3" />
                                    </Button>
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                                        En attente
                                    </div>
                                </div>
                            ))}

                            {/* Add new image button */}
                            <div className="border border-dashed rounded-md flex items-center justify-center h-24">
                                <label htmlFor="gallery-image-upload" className="cursor-pointer text-primary hover:underline flex items-center justify-center h-full w-full">
                                    <Upload className="h-6 w-6" />
                                    <Input
                                        id="gallery-image-upload"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleGalleryImageUpload}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                        {project.images.length === 0 && galleryPreviews.length === 0 && (
                            <p className="text-sm text-muted-foreground mt-2">
                                Ajoutez des images à la galerie du projet
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <Label htmlFor="challenge">Challenge *</Label>
                    <Textarea
                        id="challenge"
                        name="challenge"
                        value={project.challenge}
                        onChange={handleInputChange}
                        required
                        placeholder="Quels étaient les défis de ce projet..."
                        className="min-h-[120px]"
                    />
                </div>

                <div>
                    <Label htmlFor="solution">Solution *</Label>
                    <Textarea
                        id="solution"
                        name="solution"
                        value={project.solution}
                        onChange={handleInputChange}
                        required
                        placeholder="Comment avez-vous résolu ces défis..."
                        className="min-h-[120px]"
                    />
                </div>

                <div>
                    <Label htmlFor="result">Résultat *</Label>
                    <Textarea
                        id="result"
                        name="result"
                        value={project.result}
                        onChange={handleInputChange}
                        required
                        placeholder="Quels ont été les résultats obtenus..."
                        className="min-h-[120px]"
                    />
                </div>
            </div>

            <div className="flex gap-4 justify-end">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/dashboard/projects")}
                >
                    Annuler
                </Button>
                <Button type="submit" disabled={isLoading || uploadingImage}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {uploadingImage ? "Téléchargement des images..." : (editMode ? "Mise à jour..." : "Création...")}
                        </>
                    ) : (
                        editMode ? "Mettre à jour le projet" : "Créer le projet"
                    )}
                </Button>
            </div>
        </form>
    );
};

export default ProjectForm; 