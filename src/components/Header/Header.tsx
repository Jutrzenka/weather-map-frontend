import React from "react";

interface Props {
    title: string;
}

export const Header = ({title}:Props) => {
    return (
        <header className={"Header"}>
            <div className={"Header_background"}>
                <div className={"Header__filter"}/>
            </div>
            <div className={"Header___block"}>
                <div className={"block_font-block"}>
                    <h1 className={"block_title"}>{title}</h1>
                    <div className={"block_underline"}/>
                </div>
            </div>
        </header>
    )
}