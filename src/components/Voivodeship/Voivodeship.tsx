import React from "react";

interface Props {
    voivodeship: string;
}

export const Voivodeship = ({voivodeship}:Props) => {
    return (
        <li className={`Voivodeship ${voivodeship}`}  onClick={() => {console.log(`Kliknięto ${voivodeship}`)}}>
            <p className={"Voivodeship_p"}>
                <span className={"Voivodeship__span visually-hidden"}>{voivodeship}</span>
            </p>
        </li>
    )
}