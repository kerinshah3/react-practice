import React, {useState} from "react";

export default function ChangingCSSUsingHookUseState(){
    const [someText, setSomeTest ] = useState("Kerin");
    let [ colour , setColour] = useState("red")

    function handleClick() {
        setColour("green");
    }

    return (
        <>
            <button onClick={handleClick}>
                Changes Color
            </button>
            <h3 style={{color : colour}}>
                {someText}
            </h3>
            <h3>
                {colour}
            </h3>
        </>
    )
}