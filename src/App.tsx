import React from 'react';
import {Header} from "./components/Header/Header";
import { PolandMap } from './components/PolandMap/PolandMap';
import {Voivodeship} from "./components/Voivodeship/Voivodeship";

export const App = () => {
  return (
    <div className="App">
        <Header title={"Aplikacja pogodowa"}/>
        <PolandMap>
            <Voivodeship voivodeship={"mazowieckie"}/>
        </PolandMap>
    </div>
  );
}
