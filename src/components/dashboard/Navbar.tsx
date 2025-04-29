import React from 'react';
import { Link } from 'react-router-dom';

interface UserInfo {
    name: string;
    email: string;
    token: string;
}

interface NavbarProps {
    userInfo: UserInfo;
}

const Navbar: React.FC<NavbarProps> = ({ userInfo }) => {
    const handleLogout = () => {
        // Clear user data and refresh the page to redirect to login
        localStorage.removeItem('userInfo');
        window.location.href = '/login';
    };

    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-800">Tableau de bord</h1>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    {userInfo?.name || 'Utilisateur'}
                </span>
                <button
                    onClick={handleLogout}
                    className="text-sm text-red-600 hover:text-red-800"
                >
                    Déconnexion
                </button>
            </div>
        </nav>
    );
};

export default Navbar; 