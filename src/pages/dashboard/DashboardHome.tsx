import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, Upload, Clock } from "lucide-react";
import { API_URL } from "@/lib/api";

interface StatsData {
    totalProjects: number;
    totalImages: number;
    recentProjects: number;
}

// Define a type for the project data
interface Project {
    _id: string;
    images: string[]; // Assuming images is an array of strings (URLs or IDs)
    createdAt: string; // Assuming createdAt is a string date
    // Add other relevant project fields if needed
}

const DashboardHome = () => {
    const [stats, setStats] = useState<StatsData>({
        totalProjects: 0,
        totalImages: 0,
        recentProjects: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setIsLoading(true);
            try {
                const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

                if (!userInfo.token) {
                    throw new Error("Utilisateur non authentifié");
                }

                const response = await fetch(`${API_URL}/projects`, {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des projets");
                }

                const projects = await response.json();

                // Calculate stats
                const totalImages = projects.reduce((acc: number, project: Project) => acc + project.images.length, 0);
                const recentProjects = projects.filter((project: Project) => {
                    const createdAt = new Date(project.createdAt);
                    const thirtyDaysAgo = new Date();
                    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                    return createdAt > thirtyDaysAgo;
                }).length;

                setStats({
                    totalProjects: projects.length,
                    totalImages,
                    recentProjects,
                });
            } catch (error) {
                console.error("Erreur lors de la récupération des statistiques:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Vue d'ensemble</h2>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-white border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total des projets</CardTitle>
                        <FolderOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {isLoading ? "Chargement..." : stats.totalProjects}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Projets dans votre portfolio
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total des images</CardTitle>
                        <Upload className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {isLoading ? "Chargement..." : stats.totalImages}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Images téléchargées
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-white border shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Projets récents</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {isLoading ? "Chargement..." : stats.recentProjects}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Ajoutés ces 30 derniers jours
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Actions rapides</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card className="cursor-pointer hover:bg-gray-50 bg-white border shadow-sm" onClick={() => window.location.href = "/dashboard/projects/new"}>
                        <CardContent className="flex items-center p-6">
                            <div className="mr-4 bg-blue-50 p-3 rounded-full">
                                <FolderOpen className="h-6 w-6 text-blue-700" />
                            </div>
                            <div>
                                <h4 className="font-medium">Ajouter un projet</h4>
                                <p className="text-sm text-muted-foreground">Créer un nouveau projet dans votre portfolio</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:bg-gray-50 bg-white border shadow-sm" onClick={() => window.location.href = "/dashboard/projects"}>
                        <CardContent className="flex items-center p-6">
                            <div className="mr-4 bg-green-50 p-3 rounded-full">
                                <Upload className="h-6 w-6 text-green-700" />
                            </div>
                            <div>
                                <h4 className="font-medium">Gérer les projets</h4>
                                <p className="text-sm text-muted-foreground">Voir, modifier ou supprimer vos projets existants</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome; 