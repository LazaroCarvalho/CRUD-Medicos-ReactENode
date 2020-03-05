const baseQuery = require('./baseQuery');

// Classe com métodos pertinentes ao DAO de médicos.
class Medico {

    async listar() {
        const medicos = await baseQuery("SELECT * FROM tbl_medicos");

        if(!medicos[0]) return []

        const tamanhoArray = medicos.length;

        /* Percorrendo todos os médicos. Para cada JSON de um médico, adiciona o atributo "especialidade"
         * Executa-se uma query buscando no banco TODOS os registros de especialidades correspondendos ao ID do médico.
         * Atribui a propiedade "especialidade" do médico o array retornado do banco com todas as suas devidas especialidades.
         */
        for(let i = 0; i < tamanhoArray; i++) {
            medicos[i].especialidades = await baseQuery(`SELECT especialidades.* FROM tbl_medico_especialidades intermediaria
                                                           INNER JOIN tbl_especialidades especialidades
                                                           ON intermediaria.id_especialidade = especialidades.id
                                                           INNER JOIN tbl_medicos medico
                                                           ON intermediaria.id_medico = medico.id
                                                           WHERE medico.id = ?`, medicos[i].id)
        }

        return medicos;
    }

    async listarPorId(id) {
        const medicos = await baseQuery("SELECT * FROM tbl_medicos WHERE id = ?", id);

        if(!medicos[0]) return []

        const tamanhoArray = medicos.length;

        /* Percorrendo todos os médicos. Para cada JSON de um médico, adiciona o atributo "especialidade"
         * Executa-se uma query buscando no banco TODOS os registros de especialidades correspondendos ao ID do médico.
         * Atribui a propiedade "especialidade" do médico o array retornado do banco com todas as suas devidas especialidades.
         */
        for(let i = 0; i < tamanhoArray; i++) {
            medicos[i].especialidades = await baseQuery(`SELECT especialidades.* FROM tbl_medico_especialidades intermediaria
                                                           INNER JOIN tbl_especialidades especialidades
                                                           ON intermediaria.id_especialidade = especialidades.id
                                                           INNER JOIN tbl_medicos medico
                                                           ON intermediaria.id_medico = medico.id
                                                           WHERE medico.id = ?`, medicos[i].id)
        }

        return medicos;
    }

    async listarPorNome(nome) {
        // Buscando todos os médicos pelo nome.
        const medicos = await baseQuery(`SELECT * FROM tbl_medicos WHERE nome_medico = ?`, nome);
        
        if(!medicos[0]) return []

        const tamanhoArray = medicos.length;

        /* Percorrendo todos os médicos. Para cada JSON de um médico, adiciona o atributo "especialidade"
         * Executa-se uma query buscando no banco TODOS os registros de especialidades correspondendos ao ID do médico.
         * Atribui a propiedade "especialidade" do médico o array retornado do banco com todas as suas devidas especialidades.
         */
        for(let i = 0; i < tamanhoArray; i++) {
            medicos[i].especialidades = await baseQuery(`SELECT especialidades.* FROM tbl_medico_especialidades intermediaria
                                                           INNER JOIN tbl_especialidades especialidades
                                                           ON intermediaria.id_especialidade = especialidades.id
                                                           INNER JOIN tbl_medicos medico
                                                           ON intermediaria.id_medico = medico.id
                                                           WHERE medico.id = ?`, medicos[i].id)
        }

        return medicos;

    }

    async listarPorCRM(crm) {
        // Buscando todos os médicos pelo nome.
        const medicos = await baseQuery(`SELECT * FROM tbl_medicos WHERE crm = ?`, crm);
        
        if(!medicos[0]) return []

        const tamanhoArray = medicos.length;

        /* Percorrendo todos os médicos. Para cada JSON de um médico, adiciona o atributo "especialidade"
         * Executa-se uma query buscando no banco TODOS os registros de especialidades correspondendos ao ID do médico.
         * Atribui a propiedade "especialidade" do médico o array retornado do banco com todas as suas devidas especialidades.
         */
        for(let i = 0; i < tamanhoArray; i++) {
            medicos[i].especialidades = await baseQuery(`SELECT especialidades.* FROM tbl_medico_especialidades intermediaria
                                                           INNER JOIN tbl_especialidades especialidades
                                                           ON intermediaria.id_especialidade = especialidades.id
                                                           INNER JOIN tbl_medicos medico
                                                           ON intermediaria.id_medico = medico.id
                                                           WHERE medico.id = ?`, medicos[i].id)
        }

        return medicos;
    }

    inserir(medico) {
        return baseQuery("INSERT INTO tbl_medicos SET ?", medico);
    }

    atualizar(medico) {
        return baseQuery("UPDATE tbl_medicos set ? WHERE id = ?", [medico, medico.id]);
    }

    deletar(id) {
        return baseQuery("DELETE FROM tbl_medicos WHERE id = ?", id)
    }

}

module.exports = Medico;