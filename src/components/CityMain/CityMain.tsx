import React from "react";
import { Data } from "../../utils/useFetch";
import {CityData} from "../CityData/CityData";

interface Props {
    cityData: Data;
    isLoaded: boolean;
}

export const CityMain = ({cityData, isLoaded}:Props) => {
    if (isLoaded) {
        if (cityData !== null) {
            return (
                <article className={"CityMain"}>
                    <h2 className={"CityMain_voivodeship"}>{cityData.nameVoivodeship}</h2>
                    <CityData cityData={cityData}/>
                </article>
            )
        } else {
            return (
                <article className={"CityMain"}>
                    <p className={"Loading"}>Wybierz województwo</p>
                </article>
            )

        }
    } else {
        return(
            <article className={"CityMain"}>
                <p className={"Loading"}>Trwa ładowanie...</p>
            </article>
        )
    }
}