const { check, body } = require('express-validator');
const medicoDAO = require('../models/Medico');

class MedicoValidator {

    static validator() {

        return [
            body('crm').custom(async crm => {
                let medico = await medicoDAO.buscaPorCRM(email);
                medico = mnedico[0];

                if(medico)
                    return Promise.reject("Um médico com este crm já foi cadastrado!");
            }),

            check('crm').isLength({ min : 1, max : 7})
                .withMessage('O crm deve ter no máximo 7 dígitos'),

            check('nome').isLength({ min : 3, max : 99})
                .withMessage('O nome deve ter entre 3 e 100 caracteres'),

            check('telefone').isLength({ min : 15, max : 15})
                .withMessage('O telefone deve ser válido'),

            check('estado').isLength({ min : 4, max : 50})
                .withMessage('O estado deve ter entre 4 e 50 caracteres'),

            check('cidade').isLength({ min : 4, max : 50})
                .withMessage('A cidade deve ter entre 4 e 50 caracteres')
        ]

    }

}

module.exports = MedicoValidator;