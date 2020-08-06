import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import './styles.css';
import {removeReserve, updateReserveAmount} from "../../store/modules/reserve/actions";

export default function Reservas() {

    const dispatch = useDispatch();

    const reserves = useSelector(state => state.reserve);

    function handleRemove(id) {
        dispatch(removeReserve(id))
    }

    function decrementAmount(trip) {
        dispatch(updateReserveAmount(trip.id, trip.amount - 1));
    }

    function incrementAmount(trip) {
        dispatch(updateReserveAmount(trip.id, trip.amount + 1));
    }

    return (
        <div>
            <h1 className={"title"}>Vc solicitou {reserves.length} reservas</h1>

            {reserves.map(reserve => (
                <div className={"reservas"} key={reserve.id}>
                    <img
                        src={reserve.image}
                        alt={reserve.title}/>
                    <strong>{reserve.title}</strong>

                    <div id={"amount"}>
                        <button type={"button"} onClick={() => decrementAmount(reserve)}>
                            <MdRemoveCircle size={25} color={"#191919"}/>
                        </button>
                        <input type={"text"} readOnly value={reserve.amount}></input>
                        <button type={"button"} onClick={() => incrementAmount(reserve)}>
                            <MdAddCircle size={25} color={"#191919"}/>
                        </button>
                    </div>
                    <button
                        type={"button"}
                        onClick={() => handleRemove(reserve.id)}
                    >
                        <MdDelete size={19} color={"#000"}/>
                    </button>
                </div>
            ))}


            <footer>
                <button type={"button"}>Solicitar Reservas</button>
            </footer>
        </div>
    )
}