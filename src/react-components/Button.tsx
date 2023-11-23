import * as React from "react";

export type ButtonProps = {
    text: string;
    type: "button" | "submit" | "reset"
}

export default ({text, type}: ButtonProps) => (
    <button type={type} style={{border: "5px solid green"}}>
        {text}
    </button>
)
