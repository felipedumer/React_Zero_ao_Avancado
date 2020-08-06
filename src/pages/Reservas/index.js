import React from 'react';
import {MdDelete} from 'react-icons/md'
import './styles.css';

export default function Reservas(){
    return (
        <div>
            <h1 className={"title"}>Vc solicitou 1 reserv</h1>

            <div className={"reservas"}>
                <img
                src={"https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"}
                alt={"maceio"}/>
                <strong>Viagem Maceio 7 dias</strong>
                <span>Quantidade: 2</span>
                <button
                type={"button"}
                onClick={() => {}}
                >
                <MdDelete size={19} color={"#FFF"}/>
                </button>
            </div>

            <footer>
                <button type={"button"}>Solicitar Reservas</button>
            </footer>
        </div>
    )
}