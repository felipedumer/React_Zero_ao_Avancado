import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <div>
                <h2>Pagina Home</h2>
                <br/>
                <Link to={"/sobre"}>Ir para sobre</Link>
            </div>
        );
    }
}

export default Home;
