const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.loginUser);
router.get('/:badgeID', userController.getUserByBadgeID);
router.get('/:badgeID/current-session', userController.getCurrentSession);
router.post('/:badgeID/issues', userController.createIssue);

module.exports = router;