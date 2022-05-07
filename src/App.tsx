import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {PolandMap,  } from './components/PolandMap/PolandMap';
import {Voivodeship, } from "./components/Voivodeship/Voivodeship";
import {useFetch, } from './utils/useFetch';

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
            <main className={"Map"}>
                <PolandMap>
                    <Voivodeship voivodeship={"dolnoslaskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"kujawsko-pomorskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"lubelskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"lubuskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"lodzkie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"malopolskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"mazowieckie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"opolskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"podkarpackie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"podlaskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"pomorskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"slaskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"swietokrzyskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"warminsko-mazurskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"wielkopolskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                    <Voivodeship voivodeship={"zachodniopomorskie"} isSelect={voivodeship} setSelect={setVoivodeship}/>
                </PolandMap>
            </main>
            <ul>{synopticData}</ul>
            {info}
            <ul>{hydroData}</ul>
    </div>
  );
}
