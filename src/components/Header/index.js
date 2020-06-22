import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <div>
                Header projeto<br/>
                <Link to={"/"}> Ir para home</Link>
                <hr/>
            </div>
        );
    }
}

export default Header;
