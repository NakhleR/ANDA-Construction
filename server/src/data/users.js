const bcrypt = require('bcryptjs');

const users = [
    {
        email: 'super@admin.com',
        password: bcrypt.hashSync('Admin123', 10),
        isAdmin: true,
    },
];

module.exports = users; 