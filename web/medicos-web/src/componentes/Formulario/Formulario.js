import React, { Component } from "react";
import InputLocalizacao from './InputLocalizacao';

class Formulario extends Component {

    render() {
		return (
			<div className="card">
				<div className="card-header">
					Cadastro de Médicos
				</div>
				<div className="card-body">
					<form method="post">
						<div className="form-group">
							<label htmlFor='nome'>Nome</label>
							<input type="text" id='nome' name='nome'
								className="form-control mb-2"/>
							<label htmlFor='crm'>CRM</label>
							<input type="text" id='crm' name='crm'
								className="form-control"/>
							<label htmlFor='telefone'>Telefone</label>
							<input type="text" id='telefone' name='telefone'
								className="form-control"/>
							<InputLocalizacao recurso={"estado"} />
							<InputLocalizacao recurso={"cidade"} />
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