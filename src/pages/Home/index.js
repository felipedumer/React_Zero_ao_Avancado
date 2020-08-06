import React, {useEffect, useState} from 'react';
import api from "../../services/api";

export default function Home(){

    const [trips, seTrips] = useState([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips');
            seTrips(response.data);

            console.log(response.data);
        }

        loadApi();
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
 }