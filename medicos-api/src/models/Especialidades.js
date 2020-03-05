const baseQuery = require('./baseQuery');

class Especialidades {

    listar() {
        return baseQuery("SELECT * FROM tbl_especialidades");
    }

}

module.exports = Especialidades;