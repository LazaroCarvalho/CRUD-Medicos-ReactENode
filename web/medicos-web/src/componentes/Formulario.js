import React, { Component } from "react";

class Formulario extends Component {

    render() {
		return (
			<div className="card">
				<div className="card-header">
					Cadastro de Series
				</div>
				<div className="card-body">
					<form method="post">
						<div className="form-group">
							<label htmlFor='nome'>Nome</label>
							<input type="text" id='nome' name='nome'
								className="form-control mb-2"/>
							<label htmlFor='ano_lancamento'>Ano de Lançamento</label>
							<input type="number" id='ano_lancamento' name='ano_lancamento'
								className="form-control"/>
							<label htmlFor='temporadas'>Temporadas</label>
							<input type="text" id='temporadas' name='temporadas'
								className="form-control"/>
							<label htmlFor='sinopse'>Sinopse</label>
							<textarea id='sinopse' name='sinopse'
								className="form-control"></textarea>
							<button type='submit'
								className="btn btn-success form-control mt-3">Salvar</button>
						</div>
					</form>
				</div>
			</div>
		)
	}

}

export default Formulario