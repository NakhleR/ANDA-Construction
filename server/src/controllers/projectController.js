const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
});

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findOne({ id: req.params.id });

    if (project) {
        res.json(project);
    } else {
        res.status(404);
        throw new Error('Projet non trouvé');
    }
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = asyncHandler(async (req, res) => {
    const {
        id,
        title,
        description,
        image,
        category,
        location,
        year,
        client,
        scope,
        images,
        challenge,
        solution,
        result,
    } = req.body;

    // Check if project with this ID already exists
    const projectExists = await Project.findOne({ id });

    if (projectExists) {
        res.status(400);
        throw new Error('Un projet avec cet identifiant existe déjà');
    }

    const project = await Project.create({
        id,
        title,
        description,
        image,
        category,
        location,
        year,
        client,
        scope,
        images,
        challenge,
        solution,
        result,
    });

    if (project) {
        res.status(201).json(project);
    } else {
        res.status(400);
        throw new Error('Données de projet invalides');
    }
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        image,
        category,
        location,
        year,
        client,
        scope,
        images,
        challenge,
        solution,
        result,
    } = req.body;

    const project = await Project.findOne({ id: req.params.id });

    if (project) {
        project.title = title || project.title;
        project.description = description || project.description;
        project.image = image || project.image;
        project.category = category || project.category;
        project.location = location || project.location;
        project.year = year || project.year;
        project.client = client || project.client;
        project.scope = scope || project.scope;
        project.images = images || project.images;
        project.challenge = challenge || project.challenge;
        project.solution = solution || project.solution;
        project.result = result || project.result;

        const updatedProject = await project.save();
        res.json(updatedProject);
    } else {
        res.status(404);
        throw new Error('Projet non trouvé');
    }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findOne({ id: req.params.id });

    if (project) {
        await project.deleteOne();
        res.json({ message: 'Projet supprimé' });
    } else {
        res.status(404);
        throw new Error('Projet non trouvé');
    }
});

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
}; 