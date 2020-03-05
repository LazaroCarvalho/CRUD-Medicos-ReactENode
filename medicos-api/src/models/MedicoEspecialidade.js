const basequery = require('./baseQuery');

class MedicoEspecialidade {

    inserir(idMedico, idsEspecialidades) {
        /* Criando array que relaciona o id do médico com o id de cada especialidade
         * Para inserção de todos os valores no banco em uma única query.
        */
        const relacaoMedicoEspecialidades = idsEspecialidades.map(idEspecialidade => {
            return [idMedico, idEspecialidade]
        })

        return basequery("INSERT INTO tbl_medico_especialidades (id_medico, id_especialidade) VALUES ?", [relacaoMedicoEspecialidades]);
    }

    async atualizar(idMedico, idsEspecialidades) {
        const especialidadesMedico = await basequery(`SELECT especialidades.id FROM tbl_medico_especialidades intermediaria
                                                      INNER JOIN tbl_especialidades especialidades
                                                      ON intermediaria.id_especialidade = especialidades.id 
                                                      WHERE id_medico = ?`, idMedico);

        /* Verificando a partir dos novos ID'S de especialidades
         * Quais especialidades anteriormente inseridas no banco foram removidas
         */
        let especialidadesExcluidas = [];
        especialidadesMedico.forEach(especialidade => {
            if(idsEspecialidades.indexOf(especialidade) == -1)
                especialidadesExcluidas.push(especialidade.id);
        })

        // Removendo as especialidades excluidas do banco.
        if(especialidadesExcluidas[0]) {
            especialidadesExcluidas.forEach(async especialidadesExcluida => {
                try {
                    await basequery(`DELETE FROM tbl_medico_especialidades
                                 WHERE id_medico = ${idMedico} AND id_especialidade = ${especialidadesExcluida}`)
                } catch(erro) {
                    return erro;
                }
            });
        }

        /* Verifica quais das especialidades não existiam anteriormente no banco.
         * Insere no banco cada uma das novas especialidades adicionadas.
         */
        idsEspecialidades.forEach(async idEspecialidade => {
            if(especialidadesMedico.indexOf(idEspecialidade) == -1) {
                try{
                    await basequery(`INSERT INTO tbl_medico_especialidades (id_medico, id_especialidade)
                                     VALUES (${idMedico}, ${idEspecialidade})`)
                } catch(erro) {
                    return erro;
                }
            }
        });
    
    }

}

module.exports = MedicoEspecialidade;