const express = require('express');
const multer = require('multer');
const router = express.Router();
const { uploadImage, testUpload } = require('../controllers/uploadController');
const { protect, admin } = require('../middleware/authMiddleware');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log(`Created uploads directory at: ${uploadsDir}`);
} else {
    console.log(`Uploads directory exists at: ${uploadsDir}`);
}

// Configure multer for temporary storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Verify directory exists before writing
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
            console.log(`Created uploads directory at: ${uploadsDir}`);
        }
        console.log(`Setting file destination to: ${uploadsDir}`);
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileName = uniqueSuffix + '-' + file.originalname.replace(/\s+/g, '-');
        console.log(`Generated filename: ${fileName}`);
        cb(null, fileName);
    },
});

// Check if file is an image
const fileFilter = (req, file, cb) => {
    console.log(`Received file: ${file.originalname}, mimetype: ${file.mimetype}`);

    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        console.log('File type accepted');
        cb(null, true);
    } else {
        console.log('File type rejected');
        cb(new Error('Seules les images au format jpeg, jpg ou png sont acceptées'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
    fileFilter: fileFilter,
});

// Error handling middleware for multer
const uploadMiddleware = (req, res, next) => {
    console.log('Processing upload request...');

    upload.single('image')(req, res, (err) => {
        if (err) {
            // Handle multer errors
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading
                console.error('Multer error:', err);
                if (err.code === 'LIMIT_FILE_SIZE') {
                    return res.status(400).json({
                        message: 'La taille du fichier ne doit pas dépasser 5 Mo'
                    });
                }
                return res.status(400).json({ message: `Erreur lors du téléchargement: ${err.message}` });
            } else {
                // An unknown error occurred
                console.error('Upload error:', err);
                return res.status(400).json({ message: err.message });
            }
        }

        // Check if file was actually uploaded
        if (!req.file) {
            console.error('No file received');
            return res.status(400).json({ message: 'Aucun fichier détecté. Assurez-vous de fournir une image.' });
        }

        console.log(`File successfully received: ${req.file.filename}`);
        // All good
        next();
    });
};

// Add a simple test route
router.get('/test', testUpload);

router.post('/', protect, admin, uploadMiddleware, uploadImage);

module.exports = router; 