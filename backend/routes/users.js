const express = require('express');
const { verifyToken, checkRole } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, checkRole(['Admin']), (req, res) => {
    res.status(200).json({ message: 'Admin access granted' });
});

router.get('/moderator', verifyToken, checkRole(['Admin', 'Moderator']), (req, res) => {
    res.status(200).json({ message: 'Moderator access granted' });
});

router.get('/user', verifyToken, checkRole(['Admin', 'Moderator', 'User']), (req, res) => {
    res.status(200).json({ message: 'User access granted' });
});

module.exports = router;
