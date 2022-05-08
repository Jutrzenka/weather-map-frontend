import React from "react";

interface Props {
    voivodeship: string;
    isSelect: string | null;
    setSelect: (voivodeship:string) => void;
}

export const Voivodeship = ({voivodeship, isSelect, setSelect}:Props) => {
    return (
        <li className={`${voivodeship !== isSelect ? "Voivodeship" : "Voivodeship-select"} ${voivodeship}`}
            onClick={() => setSelect(voivodeship)}
        >
            <p className={"Voivodeship_p"}>
                <span className={"Voivodeship__span visually-hidden"}>{voivodeship}</span>
            </p>
        </li>
    )
}