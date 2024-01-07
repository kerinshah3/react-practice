import React , { useRef } from "react";

export default function UseRefsHook(){

    const inputRef = useRef(null)

    function changeName(){
        // get the value
        console.log(inputRef.current.value)
        // reset the value
        inputRef.current.value = ""
        // set back in the focus
        inputRef.current.focus()
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                ref={inputRef}/>

            <button onClick={changeName}> Click me to change Name </button>
        </div>
    )



}