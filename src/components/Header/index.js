import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import './styles.css';
import {useSelector} from "react-redux";

export default function Header(){
    const reserveSize = useSelector(state => state.reserve.length);

    return (
        <header className={"container"}>
            <Link to={"/"}>
                <img className={"logo"} src={logo} alt={"Logo"}/>
            </Link>
            <Link className={"reserva"} to={"/reservas"}>
                <div>
                    <strong>Minhas reservas</strong>
                    <span>{reserveSize} Reservas</span>
                </div>
            </Link>
        </header>
    )
}