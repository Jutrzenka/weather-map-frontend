import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {useFetch, } from './utils/useFetch';
import {Map} from "./components/Map/Map";
import { Separator } from './components/Separator/Separator';
import { CityMain } from './components/CityMain/CityMain';
import {ButtonLink} from "./components/ButtonLink/ButtonLink";
import { Hydro } from './components/Hydro/Hydro';

export const App = () => {
    const [voivodeship, setVoivodeship] = useState<string | null>(null);
    const [isError, isLoaded, fetchData] = useFetch(voivodeship);

    return (
        <div className="App">
            <main className={"App_main"}>
                <Header title={"Aplikacja pogodowa"}/>
                <Separator/>
                <div className={"App__info"}>
                    <Map voivodeship={voivodeship} setVoivodeship={setVoivodeship}/>
                    <CityMain isError={isError} isLoaded={isLoaded} cityData={fetchData}/>
                </div>
            </main>
            {fetchData !== null ? <Hydro data={fetchData}/> : null}
            <ButtonLink href={"https://danepubliczne.imgw.pl"} title={"Kliknij tu, aby odwiedzić stronę danepubliczne.imgw.pl"}/>
        </div>
    );
};
