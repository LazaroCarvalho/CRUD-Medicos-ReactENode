import React, { Component } from "react";
import Formulario from "./Formulario";

class BoxMedicos extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Formulario/>
                    </div>
                    <div className="col-md-8">
                    </div>
                </div>
            </div>
        )
    }

}

export default BoxMedicos