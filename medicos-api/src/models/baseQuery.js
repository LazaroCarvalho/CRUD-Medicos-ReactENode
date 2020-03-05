const conexao = require('../infra/conexaoBanco');

// Função que executa um SQL qualquer no banco passando os parâmetros(caso existam). Retorna uma promessa.
module.exports = (sql, parametros) => {

    return new Promise((resolve, reject) => {

        conexao.query(sql, parametros || "", (erro, retorno) => {
            console.log(sql)
            if(erro) return reject(erro);
            else return resolve(retorno);

        })

    });

}