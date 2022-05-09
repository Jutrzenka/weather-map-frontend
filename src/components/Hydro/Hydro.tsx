import React from "react";
import {Separator} from "../Separator/Separator";
import {ButtonHydro} from "../ButtonHydro/ButtonHydro";
import {ListHydro} from "../ListHydro/ListHydro";
import {ClearData} from "../../utils/useFetch";
import {useToggle} from "../../utils/useToggle";

interface Props {
    data: ClearData;
}

export const Hydro = ({data}:Props) => {
    const [showValue, toggleValue] = useToggle(false)
        return (
            <>
                <Separator/>
                <main className={"App_hydro"}>
                    <ButtonHydro setClick={toggleValue} title={!showValue ? "Odkryj dane hydrologiczne" : "Schowaj dane hydrologiczne"}/>
                    {showValue ? <ListHydro cityData={data}></ListHydro> : null}
                </main>
                {!showValue ? <Separator/> : null}
            </>
        )
}