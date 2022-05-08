import React, {useState} from "react";
import {ClearData} from "../../utils/useFetch";
import {City} from "../City/City";

interface Props {
    cityData: ClearData;
}

export const CityData = ({cityData}:Props) => {
    const [selectCity, setSelectCity] = useState("");
    let cityElementArray;
    if (cityData.synopticData.length <= 1) {
        cityElementArray = (
            <div className={"CityData_city"}>
                <City value={cityData.synopticData[0]} selected={cityData.synopticData[0].city}/>
            </div>
        )
    } else {
        cityElementArray = (
            <>
                <div className={"CityData_select"}>
                    <button key={cityData.synopticData[0].city} onClick={() => {setSelectCity(cityData.synopticData[0].city)}}
                            className={`CityData__city ${selectCity === cityData.synopticData[0].city ? "select-city" : undefined}`}>
                        <p className={"CityData___p"}>{cityData.synopticData[0].city}</p>
                    </button>
                    <button key={cityData.synopticData[1].city} onClick={() => {setSelectCity(cityData.synopticData[1].city)}}
                            className={`CityData__city ${selectCity === cityData.synopticData[1].city ? "select-city" : undefined}`}>
                        <p className={"CityData___p"}>{cityData.synopticData[1].city}</p>
                    </button>
                </div>
                <div className={"CityData_city"}>
                    <City value={cityData.synopticData[0]} selected={selectCity}/>
                    <City value={cityData.synopticData[1]} selected={selectCity}/>
                </div>
            </>
        );
    }
    return (
        <div className={"CityData"}>
            {cityElementArray}
        </div>
    );
}