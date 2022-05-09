import React from "react";
import { Data } from "../../utils/useFetch";
import {CityData} from "../CityData/CityData";

interface Props {
    cityData: Data;
    isLoaded: boolean;
    isError: boolean;
}

export const CityMain = ({cityData, isLoaded, isError}:Props) => {
    if (isError) {
        return (
            <article className={"CityMain"}>
                <p className={"Loading"}>Wystąpił błąd</p>
                <p className={"Loading"}>Przepraszamy</p>
                <p className={"Loading"}>Spróbuj ponownie później</p>
            </article>
        )
    }
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