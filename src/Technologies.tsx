import React from "react";

type TechnologiesPropsType = {
    title?: string
}
export const Technologies = (props: TechnologiesPropsType) => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
}