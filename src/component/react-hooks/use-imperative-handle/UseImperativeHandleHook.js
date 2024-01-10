import React ,{ useRef } from "react";
import InsideObject from "./InsideObject";

export default function UseImperativeHandleHook(){

    const buttonRef = useRef(null)

    return(
        <div>
            <button onClick={() => buttonRef.current.changeToggle()}>Click me for fun</button>
            <InsideObject ref={buttonRef}/>
        </div>
    )
}