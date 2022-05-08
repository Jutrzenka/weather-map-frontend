import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {useFetch, } from './utils/useFetch';
import {Map} from "./components/Map/Map";
import { Separator } from './components/Separator/Separator';
import { CityMain } from './components/CityMain/CityMain';
import {ButtonLink} from "./components/ButtonLink/ButtonLink";

export const App = () => {
    const [voivodeship, setVoivodeship] = useState<string | null>(null);
    const [isLoaded, fetchData] = useFetch(voivodeship);

    return (
        <div className="App">
            <main className={"App_main"}>
                <Header title={"Aplikacja pogodowa"}/>
                <Separator/>
                <div className={"App__info"}>
                    <Map voivodeship={voivodeship} setVoivodeship={setVoivodeship}/>
                    <CityMain isLoaded={isLoaded} cityData={fetchData}/>
                </div>
                <Separator/>
                <ButtonLink href={"https://danepubliczne.imgw.pl"} text={"link do źródła danych"}/>
            </main>
        </div>
    );
};
