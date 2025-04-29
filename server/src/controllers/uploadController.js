const asyncHandler = require('express-async-handler');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
const path = require('path');

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log(`Created uploads directory at: ${uploadsDir}`);
}

// @desc    Upload image to Cloudinary
// @route   POST /api/upload
// @access  Private/Admin
const uploadImage = asyncHandler(async (req, res) => {
    console.log('Upload controller started');

    if (!req.file) {
        console.error('No file in request');
        res.status(400);
        throw new Error('Veuillez télécharger une image');
    }

    try {
        // Upload to Cloudinary
        const filePath = req.file.path;
        console.log(`Processing file at path: ${filePath}`);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.error(`File not found at ${filePath}`);
            res.status(400);
            throw new Error('Fichier non trouvé');
        }

        // Get file size and log it for debugging
        const stats = fs.statSync(filePath);
        console.log(`Uploading file: ${filePath}, Size: ${stats.size} bytes`);

        // Verify Cloudinary configuration
        console.log('Cloudinary config:', {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? 'Set' : 'Not set',
            api_key: process.env.CLOUDINARY_API_KEY ? 'Set' : 'Not set',
            api_secret: process.env.CLOUDINARY_API_SECRET ? 'Set' : 'Not set'
        });

        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'portfolio-projects',
            use_filename: true,
        });

        console.log('Cloudinary upload successful:', result.secure_url);

        // Remove file from local storage after upload to Cloudinary
        try {
            fs.unlinkSync(filePath);
            console.log(`Temporary file removed: ${filePath}`);
        } catch (unlinkError) {
            console.error(`Failed to remove temporary file: ${unlinkError.message}`);
            // Continue even if file removal fails
        }

        // Return Cloudinary URL
        res.json({
            message: 'Image téléchargée avec succès',
            imageUrl: result.secure_url,
        });
    } catch (error) {
        console.error('Upload error details:', error);

        // Remove file from local storage if upload to Cloudinary fails
        if (req.file && fs.existsSync(req.file.path)) {
            try {
                fs.unlinkSync(req.file.path);
                console.log(`Temporary file removed after error: ${req.file.path}`);
            } catch (unlinkError) {
                console.error(`Failed to remove temporary file after error: ${unlinkError.message}`);
            }
        }

        res.status(500);
        throw new Error(`Erreur lors du téléchargement: ${error.message}`);
    }
});

// Simple test endpoint
const testUpload = (req, res) => {
    res.json({ message: 'Upload controller is working' });
};

module.exports = {
    uploadImage,
    testUpload
}; 