import React from "react";

interface Props {
    title: string;
    setClick: any;
}

export const ButtonHydro = ({title, setClick}:Props) => {
    return (
        <button onClick={setClick} className={"ButtonHydro"}>
            <p className={"ButtonHydro_p"}>{title}</p>
        </button>
    )
}