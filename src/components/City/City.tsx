import React from "react";
import {SynopticData} from "../../utils/useFetch";

interface Props {
    value: SynopticData;
    selected: string;
}

export const City = ({value, selected}:Props) => {
    if (value.city === selected) {
        return (
            <div className={"City"}>
                <div className={"City_div"}><span>Miasto:</span> {value.city}</div>
                <div className={"City_div"}><span>Temperatura:</span> {value.temp}</div>
                <div className={"City_div"}><span>Wilgotność:</span> {value.relativeHumidity}</div>
                <div className={"City_div"}><span>Suma opadów:</span> {value.totalPrecipitation}</div>
                <div className={"City_div"}><span>Ciśnienie:</span> {value.atmosphericPressure}</div>
            </div>
        )
    } else {
        return null;
    }
}