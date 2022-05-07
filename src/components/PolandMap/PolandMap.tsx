import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode;
}

export const PolandMap = ({children}:Props) => {
    return (
        <div className={"PolandMap"}>
            <img className={"PolandMap_img"} src={"./poland.png"} alt={"Poland"}/>
            <ul className={"PolandMap_ul"}>
                {children}
            </ul>
        </div>
    );
}