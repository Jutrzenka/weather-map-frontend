import React from "react";

interface Props {
    voivodeship: string;
}

export const Voivodeship = ({voivodeship}:Props) => {
    return (
        <li className={`Voivodeship ${voivodeship}`}>
            <a href={"/"}>{voivodeship}</a>
        </li>
    )
}