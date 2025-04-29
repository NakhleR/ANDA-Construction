const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const projects = require('./data/projects');
const User = require('./models/userModel');
const Project = require('./models/projectModel');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        // Clear database
        await User.deleteMany();
        await Project.deleteMany();

        // Import users
        const createdUsers = await User.insertMany(users);
        console.log('Users imported!');

        // Import projects
        await Project.insertMany(projects);
        console.log('Projects imported!');

        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        // Clear database
        await User.deleteMany();
        await Project.deleteMany();

        console.log('Data destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
} 