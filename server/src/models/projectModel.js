const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        client: {
            type: String,
            required: true,
        },
        scope: {
            type: [String],
            required: true,
        },
        images: {
            type: [String],
            required: true,
        },
        challenge: {
            type: String,
            required: true,
        },
        solution: {
            type: String,
            required: true,
        },
        result: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project; 