import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode;
}

export const PolandMap = ({children}:Props) => {
    return (
        <div className={"PolandMap"}>
            <div className={"PolandMap_img"}/>
            <ul className={"PolandMap_ul"}>
                {children}
            </ul>
        </div>
    );
}