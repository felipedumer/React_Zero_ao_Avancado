import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Error extends Component {

    render() {
        return (
            <div>
                <h2>Error</h2><br/>

                <Link to={"/"}>Ir para home</Link>
            </div>
        );
    }
}

export default Error;
