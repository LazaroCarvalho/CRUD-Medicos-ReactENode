const medicoDAO = new (require('../models/Medico'))();
const medicoEspecialidadeDAO = new (require('../models/MedicoEspecialidade'))();

// Funções responsáveis por chamar os métodos da DAO de médicos.
module.exports = {

    async listar(req, res) {
        try{
            const medicos = await medicoDAO.listar();

            if(!medicos[0]) return res.status(404).send({"erro" : "Nenhum médico foi encontrado"});

            if(medicos.length == 1) return res.status(200).send(medicos[0]);
            
            return res.status(200).send(medicos);
        } catch(erro) {
            return res.status(500).send(erro)
        }
    },

    async listarPorId(req, res) {
        const id = req.params.id;
        
        try{
            const medicos = await medicoDAO.listarPorId(id);

            if(!medicos[0]) return res.status(404).send({"erro" : `Nenhum médico com id ${id} foi encontrado`});

            if(medicos.length == 1) return res.status(200).send(medicos[0]);
            
            return res.status(200).send(medicos);
        } catch(erro) {
            return res.status(500).send(erro)
        }
    },

    async listarPorNome(req, res) {
        const nome = req.params.nome;
        
        try{
            const medicos = await medicoDAO.listarPorNome(nome);

            if(!medicos[0]) return res.status(404).send({"erro" : `Nenhum médico com nome ${nome} foi encontrado`});

            if(medicos.length == 1) return res.status(200).send(medicos[0]);
            
            return res.status(200).send(medicos);
        } catch(erro) {
            return res.status(500).send(erro)
        }
    },

    async listarPorCRM(req, res) {
        const crm = req.params.id;

        try{
            const medicos = await medicoDAO.listarPorCRM(crm);

            if(!medicos[0]) return res.status(404).send({"erro" : `Nenhum médico com CRM ${crm} foi encontrado`});

            if(medicos.length == 1) return res.status(200).send(medicos[0]);

            return res.status(200).send(medicos);
        } catch(erro) {
            return res.status(500).send(erro)
        }
    },


    async inserir(req, res) {
        let medico = req.body;
        let { especialidades } = req.body;

        delete medico.especialidades;

        try{
            const retornoMedico = await medicoDAO.inserir(medico);
            const idMedico = retornoMedico.insertId;
            medico.id = idMedico;

            await medicoEspecialidadeDAO.inserir(idMedico, especialidades);

            medico.especialidades = especialidades;
            return res.status(201).send(medico)
        } catch(erro) {
            return res.status(500).send(erro)
        }
    },

    async atualizar(req, res) {
        const idMedico = req.params.id;
        let medico = req.body;
        medico.id = idMedico;
        const especialidades = req.body.especialidades;
        delete medico.especialidades

        try{
            const retorno = await medicoDAO.atualizar(medico);

            if(!retorno.affectedRows) 
                return res.status(404).send({"erro" : "Médico não encontrado"});

            await medicoEspecialidadeDAO.atualizar(idMedico, especialidades);

            medico.especialidades = especialidades;
            return res.status(200).send(medico);
        } catch(erro) {
            return res.status(500).send(erro)
        }
    },

    async deletar(req, res) {
        const id = req.params.id;

        try {
            const retorno = await medicoDAO.deletar(id);

            if(!retorno.affectedRows) return res.status(404).send({"erro" : "Médico não encontrado"});

            return res.status(204).send(retorno);
        } catch(erro) {
            return res.status(500).send(erro)
        }
    }
}