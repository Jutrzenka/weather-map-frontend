import React from "react";
import {ClearData} from "../../utils/useFetch";

interface Props {
    cityData: ClearData;
}

export const ListHydro = ({cityData}:Props) => {
    const arrayList = cityData.hydroData.map((value,index) =>
        <div key={index} className={"ListHydro_Tile"}>
            <p><span>Miasto:</span> {value.city}</p>
            <p><span>Zbiornik:</span> {value.river}</p>
            <p><span>Wysokość:</span> {value.waterHeight}</p>
        </div>
    )
    return (
        <div className={"ListHydro"}>
            {arrayList}
        </div>
    )
}