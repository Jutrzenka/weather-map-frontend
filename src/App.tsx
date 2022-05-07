import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {PolandMap,  } from './components/PolandMap/PolandMap';
import {Voivodeship, } from "./components/Voivodeship/Voivodeship";

export const App = () => {
    const [voivodeship, setVoivodeship] = useState("");
    return (
        <div className="App">
            <Header title={"Aplikacja pogodowa"}/>
            <main>
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
        <p>{voivodeship}</p>
    </div>
  );
}
