import React, {Component} from 'react';
import Inicio from "../Inicio";
import Sobre from "../Sobre";
import Contato from "../Contato";
import "../../style.css";

class Home extends Component {

    render() {
        return (
            <div>
                <Inicio/>
                <Sobre/>
                <Contato/>
            </div>
        );
    }
}

export default Home;