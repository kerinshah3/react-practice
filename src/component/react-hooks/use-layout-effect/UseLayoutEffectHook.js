import React , { useRef , useEffect , useLayoutEffect } from "react";

export default function UseLayoutEffectHook(){

    const inputRef = useRef(null)
    useLayoutEffect(() => {
        console.log("Here in useLayoutEffect " + inputRef.current.value)
    });

    useEffect(() => {
        inputRef.current.value = "Name Changed here"
        console.log("Here in useEffect " + inputRef.current.value)
    })

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value="Kerin"
                ref={inputRef}/>
        </div>
    )



}