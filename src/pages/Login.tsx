import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { API_URL } from "@/lib/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    // Effet pour définir la couleur de fond
    useEffect(() => {
        // On force un fond blanc pour cette page
        document.body.style.backgroundColor = "white";
        document.body.style.paddingTop = "0";

        return () => {
            // Réinitialiser lorsque le composant est démonté
            document.body.style.backgroundColor = "";
            document.body.style.paddingTop = "";
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Make sure we have all required fields before saving
                const userInfo = {
                    name: data.name || email.split('@')[0], // Fallback to username from email if name not provided
                    email: data.email || email,
                    token: data.token || ''
                };

                // Save user info in localStorage
                localStorage.setItem("userInfo", JSON.stringify(userInfo));

                toast({
                    title: "Connexion réussie",
                    description: "Vous êtes maintenant connecté",
                    variant: "default",
                });

                // Set timeout to ensure localStorage is updated before navigation
                setTimeout(() => {
                    navigate("/dashboard");
                }, 100);
            } else {
                toast({
                    title: "Erreur de connexion",
                    description: data.message || "Email ou mot de passe incorrect",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Erreur de connexion",
                description: "Une erreur est survenue lors de la connexion",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white admin-page">
            <Card className="w-full max-w-md shadow-lg border">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Administration</CardTitle>
                    <CardDescription className="text-center">
                        Connectez-vous pour accéder au tableau de bord
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="votre@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Mot de passe</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-500" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Connexion..." : "Se connecter"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default Login; 