# Portfolio Backend

Backend pour site web de portfolio avec tableau de bord administrateur et fonctionnalité de téléchargement d'images.

## Configuration

1. Installez les dépendances:

```
cd server
npm install
```

2. Créez un fichier `.env` à la racine du dossier `server` avec le contenu suivant:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=portfolioSecretKey
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

3. Assurez-vous que MongoDB est en cours d'exécution localement.

4. Importez les données initiales, y compris l'utilisateur admin:

```
cd server
npm run seed
```

Cette commande crée automatiquement un utilisateur admin avec:

- Email: super@admin.com
- Mot de passe: Admin123

5. Démarrez le serveur:

```
npm run dev
```

## API Endpoints

### Authentification

- `POST /api/users/login` - Connexion administrateur
- `POST /api/users/register` - Création d'un compte administrateur (protégé)
- `GET /api/users/profile` - Obtenir le profil utilisateur
- `PUT /api/users/profile` - Mettre à jour le profil utilisateur

### Projets

- `GET /api/projects` - Obtenir tous les projets
- `GET /api/projects/:id` - Obtenir un projet par ID
- `POST /api/projects` - Créer un nouveau projet (protégé)
- `PUT /api/projects/:id` - Mettre à jour un projet (protégé)
- `DELETE /api/projects/:id` - Supprimer un projet (protégé)

### Téléchargement d'images

- `POST /api/upload` - Télécharger une image (protégé)

## Informations de connexion par défaut

- Email: super@admin.com
- Mot de passe: Admin123
