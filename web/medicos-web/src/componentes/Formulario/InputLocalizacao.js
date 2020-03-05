import React, { Component } from "react";

class InputLocalizacao extends Component {

    constructor() {
        super()

        this.state = {
            "estados" : [

            ],
            "cidades" : [

            ]
        }
    }

    async componentDidMount() {
        try {
            let estados = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            estados = await estados.json();
            this.setState({estados : estados})
        } catch(erro) {
            console.log(erro)
        }
    }   

    localizacaoHandler = async (e) => {
        let estado = e.target.value
        try {
            let cidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
            cidades = await cidades.json()
            this.setState({cidades : cidades})
        } catch(erro) {
            console.log(erro)
        }
        
    }

    render() {
        let recurso = this.props.recurso
        if(recurso == "estado") {
            return(
                <>
                    <label htmlFor='estado'>Estados</label>
                    <select className="form-control" name={recurso} onChange={this.localizacaoHandler}>
                        <option value="0">
                            Selecione um estado
                        </option>
                        {this.state.estados.map(estado => {
                            return(
                                <option value={estado.id} key={estado.id}>
                                    {estado.nome}
                                </option>
                            );
                        })}
                    </select>
                </>
            )
        }
        if(recurso == "cidade"){
            console.log(this.state.cidades)
            if(!this.state.cidades[0]) {
                return(
                    <>
                        <label htmlFor='cidade'>Cidades</label>
                        <select className="form-control" name={recurso}>
                            <option value="0">
                                Selecione uma cidade
                            </option>
                            {this.state.cidades.map(cidade => {
                                return(
                                    <option value={cidade.id} key={cidade.id}>
                                        {cidade.nome}
                                    </option>
                                );
                            })}
                        </select>
                    </>
                )
           }
           else {
                return(
                    <>
                        <label htmlFor='estado'>Cidades</label>
                        <select disabled className="form-control" name={recurso}>
                        </select>
                    </>
                )
           }
        }
        
    }

}

export default InputLocalizacao;