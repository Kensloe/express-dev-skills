var express = require('express');
var router = express.Router();
// Require the controller for skills
const skillsCtrl = require('../controllers/skills');

// All routes will start with '/skills'
// because this router is mounted in
// server.js with a starts with path of
// /skills

// GET /skills
router.get('/', skillsCtrl.index);
// Get /skills (index functionality)
router.get('/:id', skillsCtrl.show);

module.exports = router;
