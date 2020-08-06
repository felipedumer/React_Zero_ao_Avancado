import React, {useEffect, useState} from 'react';
import api from "../../services/api";
import {MdFlightTakeoff} from 'react-icons/md';
import './styles.css';
import {useDispatch} from "react-redux";
import {addReserve} from "../../store/modules/reserve/actions";

export default function Home(){
    const dispatch = useDispatch();

    const [trips, seTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips');
            seTrips(response.data);

            console.log(response.data);
        }

        loadApi();
    }, []);

    function handleAdd(trip) {
        dispatch(addReserve(trip));
    }

    return (
        <div>
            <div className={"box"}>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title}/>
                        <strong>{trip.title}</strong>
                        <span>Status: {trip.status ? "Disponível" : "Não disponível"}</span>

                        <button
                        type={"button"}
                        onClick={() => handleAdd(trip)}
                        >
                            <div>
                                <MdFlightTakeoff size={16} color={"#FFF"}/>
                            </div>
                            <span>Solicitar Reservas</span>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    )
 }