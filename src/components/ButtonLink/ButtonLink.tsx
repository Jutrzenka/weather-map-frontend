import React from "react";

interface Props {
    href: string;
    title: string;
}

export const ButtonLink = ({href, title}:Props) => {
    return (
        <div className={"ButtonLink"}>
            <a className={"ButtonLink_Link"} href={href}>{title}</a>
        </div>
    )
}