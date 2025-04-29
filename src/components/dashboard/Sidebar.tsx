import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    return (
        <aside className="bg-gray-50 w-64 min-h-screen hidden md:block border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-anda-blue">ANDA Construction</h2>
                <p className="text-sm text-gray-500">Administration</p>
            </div>

            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/dashboard"
                            className={`block p-2 rounded ${isActive('/dashboard') && !isActive('/dashboard/projects') ? 'bg-anda-blue text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            Tableau de bord
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/projects"
                            className={`block p-2 rounded ${isActive('/dashboard/projects') ? 'bg-anda-blue text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            Projets
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar; 