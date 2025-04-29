import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface UserInfo {
    name: string;
    email: string;
    token: string;
}

const DashboardLayout = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Force un fond blanc pour le dashboard
        document.body.style.backgroundColor = "white";
        document.body.style.paddingTop = "0";

        const user = localStorage.getItem("userInfo");
        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                // Ensure all required fields exist
                if (parsedUser && parsedUser.name && parsedUser.email) {
                    setUserInfo(parsedUser);
                }
            } catch (error) {
                console.error("Error parsing user info:", error);
                // Clear invalid data
                localStorage.removeItem("userInfo");
            }
        }

        setLoading(false);

        return () => {
            // Réinitialiser lorsque le composant est démonté
            document.body.style.backgroundColor = "";
            document.body.style.paddingTop = "";
        };
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen bg-white">Chargement...</div>;
    }

    if (!userInfo) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex h-screen bg-white admin-page">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar userInfo={userInfo} />
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout; 