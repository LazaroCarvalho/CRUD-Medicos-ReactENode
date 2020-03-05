const router = require('express').Router();
const medicoCtrl = require('../controllers/medicoController');
const MedicoValidator = require('../validators/MedicoValidator');

// Configurando rotas para o recurso de médicos da API.
router.get('/', medicoCtrl.listar);
router.get('/:id', medicoCtrl.listarPorId);
router.get('/search=:nome', medicoCtrl.listarPorNome);
router.post('/', MedicoValidator.validator(), medicoCtrl.inserir);
router.patch('/:id', MedicoValidator.validator(), medicoCtrl.atualizar);
router.delete('/:id', medicoCtrl.deletar);

module.exports = router;