const router = require('express').Router();
const especialidadeCtrl = require('../controllers/especialidadeController');

router.get('/', especialidadeCtrl.listar);

module.exports = router;