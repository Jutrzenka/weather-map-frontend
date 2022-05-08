import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {useFetch, } from './utils/useFetch';
import {Map} from "./components/Map/Map";

export const App = () => {
    const [voivodeship, setVoivodeship] = useState<string | null>(null);
    const [isLoaded, fetchData] = useFetch(voivodeship);

    let synopticData;
    let info = null;
    let hydroData;
    if (fetchData !== null && isLoaded) {
        info = <h3>Poziom wody:</h3>;
        synopticData = [...fetchData.synopticData].map((value) =>
            <li>
                <h2>{value.city}</h2>
                <p>{value.temp}</p>
                <p>{value.atmosphericPressure}</p>
                <p>{value.relativeHumidity}</p>
                <p>{value.totalPrecipitation}</p>
            </li>);
        hydroData = [...fetchData.hydroData].map((value) =>
            <li>
                <p>{value.city} - {value.river} - {value.waterHeight}</p>
            </li>
        )
    } else if (voivodeship !== null && !isLoaded) {
        synopticData = "Ładowanie...";
    } else {
        synopticData = "Wybierz województwo";
    }

    return (
        <div className="App">
            <Header title={"Aplikacja pogodowa"}/>
            <h1>{fetchData !== null ? fetchData.name : "Wybierz województwo"}</h1>
            <Map voivodeship={voivodeship} setVoivodeship={setVoivodeship}/>
            <ul>{synopticData}</ul>
            {info}
            <ul>{hydroData}</ul>
    </div>
  );
}
