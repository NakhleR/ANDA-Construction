import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { API_URL } from "@/lib/api";

interface Project {
    _id: string;
    id: string;
    title: string;
    category: string;
    year: string;
    createdAt: string;
}

const ProjectsList = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [projectToDelete, setProjectToDelete] = useState<string | null>(null);
    const { toast } = useToast();

    const fetchProjects = async () => {
        setIsLoading(true);
        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

            if (!userInfo.token) {
                throw new Error("Utilisateur non authentifié");
            }

            const response = await fetch(`${API_URL}/projects`);

            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des projets");
            }

            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des projets:", error);
            toast({
                title: "Erreur",
                description: "Impossible de récupérer la liste des projets",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDeleteProject = async () => {
        if (!projectToDelete) return;

        try {
            const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

            if (!userInfo.token) {
                throw new Error("Utilisateur non authentifié");
            }

            const response = await fetch(`${API_URL}/projects/${projectToDelete}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la suppression du projet");
            }

            // Refresh projects after delete
            fetchProjects();

            toast({
                title: "Projet supprimé",
                description: "Le projet a été supprimé avec succès",
                variant: "default",
            });
        } catch (error) {
            toast({
                title: "Erreur",
                description: "Impossible de supprimer le projet",
                variant: "destructive",
            });
        } finally {
            setProjectToDelete(null);
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR");
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Projets</h2>
                <Link to="/dashboard/projects/new">
                    <Button className="flex items-center">
                        <Plus className="mr-2 h-4 w-4" />
                        Nouveau projet
                    </Button>
                </Link>
            </div>

            {isLoading ? (
                <div className="text-center py-8">Chargement des projets...</div>
            ) : projects.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Aucun projet trouvé</p>
                    <Link to="/dashboard/projects/new">
                        <Button>Créer un projet</Button>
                    </Link>
                </div>
            ) : (
                <div className="border rounded-md bg-white shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Titre</TableHead>
                                <TableHead>Catégorie</TableHead>
                                <TableHead>Année</TableHead>
                                <TableHead>Date de création</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {projects.map((project) => (
                                <TableRow key={project._id}>
                                    <TableCell className="font-medium">{project.title}</TableCell>
                                    <TableCell>{project.category}</TableCell>
                                    <TableCell>{project.year}</TableCell>
                                    <TableCell>{formatDate(project.createdAt)}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link to={`/dashboard/projects/edit/${project.id}`}>
                                                <Button size="sm" variant="outline">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="text-red-500 border-red-500 hover:bg-red-50"
                                                        onClick={() => setProjectToDelete(project.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Êtes-vous sûr de vouloir supprimer le projet "{project.title}" ? Cette action est irréversible.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel onClick={() => setProjectToDelete(null)}>Annuler</AlertDialogCancel>
                                                        <AlertDialogAction
                                                            className="bg-red-500 hover:bg-red-600"
                                                            onClick={handleDeleteProject}
                                                        >
                                                            Supprimer
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default ProjectsList; 