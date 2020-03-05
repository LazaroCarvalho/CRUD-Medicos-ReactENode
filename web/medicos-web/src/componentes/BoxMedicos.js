import React, { Component } from "react";
import Formulario from "./Formulario/Formulario";
import Tabela from "./Tabela";

class BoxMedicos extends Component {

    render() {
        return(
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-4">
                        <Formulario/>
                    </div>
                    <div className="col-md-8">
                        <Tabela />
                    </div>
                </div>
            </div>
        )
    }

}

export default BoxMedicos