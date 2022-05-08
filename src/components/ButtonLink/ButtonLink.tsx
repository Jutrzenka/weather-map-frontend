import React from "react";

interface Props {
    href: string;
    text: string;
}

export const ButtonLink = ({href, text}:Props) => {
    return (
        <div className={"ButtonLink"}>
            <a href={href}>{text}</a>
        </div>
    )
}