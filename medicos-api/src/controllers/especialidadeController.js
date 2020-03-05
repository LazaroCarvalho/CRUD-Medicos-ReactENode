const especialidadeDAO = new (require('../models/Especialidades'))();

module.exports = {

    async listar(req, res) {
        
        try{
            const especialidades = await especialidadeDAO.listar();

            if(!especialidades[0]) return res.status(404).send({"erro" : "Nenhuma especialidade foi encontrada"})

            if(especialidades.length == 1) return res.status(200).send(especialidades[0])

            return res.status(200).send(especialidades)
        } catch(erro) {
            return res.status(500).send(erro)
        }

    }

}