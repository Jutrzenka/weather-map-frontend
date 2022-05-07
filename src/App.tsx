import React from 'react';
import {Header} from "./components/Header/Header";
import {PolandMap,  } from './components/PolandMap/PolandMap';
import {Voivodeship, } from "./components/Voivodeship/Voivodeship";

export const App = () => {
  return (
    <div className="App">
        <Header title={"Aplikacja pogodowa"}/>
        <main>
            <PolandMap>
                <Voivodeship voivodeship={"dolnoslaskie"}/>
                <Voivodeship voivodeship={"kujawsko-pomorskie"}/>
                <Voivodeship voivodeship={"lubelskie"}/>
                <Voivodeship voivodeship={"lubuskie"}/>
                <Voivodeship voivodeship={"lodzkie"}/>
                <Voivodeship voivodeship={"malopolskie"}/>
                <Voivodeship voivodeship={"mazowieckie"}/>
                <Voivodeship voivodeship={"opolskie"}/>
                <Voivodeship voivodeship={"podkarpackie"}/>
                <Voivodeship voivodeship={"podlaskie"}/>
                <Voivodeship voivodeship={"pomorskie"}/>
                <Voivodeship voivodeship={"slaskie"}/>
                <Voivodeship voivodeship={"swietokrzyskie"}/>
                <Voivodeship voivodeship={"warminsko-mazurskie"}/>
                <Voivodeship voivodeship={"wielkopolskie"}/>
                <Voivodeship voivodeship={"zachodniopomorskie"}/>
            </PolandMap>
        </main>
    </div>
  );
}
