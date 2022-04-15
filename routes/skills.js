var express = require('express');
var router = express.Router();
// Require the controller for todos
const skillsCtrl = require('../controllers/skills');

// All routes will start with '/skills'
// because this router is mounted in 
// server.js with a starts with path of
// /skills 

// GET /skills (index functionality)
router.get('/', skillsCtrl.index);
// GET /skills/new (new functionality)
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality)
router.get('/:id', skillsCtrl.show);
// GET /Skills/:id/edit (edit functionality)
router.get('/:id/edit', skillsCtrl.edit);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:somethingcrazy', skillsCtrl.delete);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
