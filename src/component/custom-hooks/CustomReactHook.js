import React from "react";
import useToggle from "./useToggle";

export default function CustomReactHook(){
    const [isVisible, toggle ] = useToggle(false);


    return (
        <div>
            <button onClick={toggle}>
                {isVisible? "Hide": "Show"}
            </button>
            {isVisible && <h3>
                This is using custom hook
            </h3>}
        </div>
    )
}