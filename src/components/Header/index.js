import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import './styles.css';

export default function Header(){
    return (
        <header className={"container"}>
            <Link to={"/"}>
                <img className={"logo"} src={logo} alt={"Logo"}/>
            </Link>
            <Link className={"reservas"} to={"/reservas"}>
                <div>
                    <strong>Minhas reservas</strong>
                    <span>0 Reservas</span>
                </div>
            </Link>
        </header>
    )
}