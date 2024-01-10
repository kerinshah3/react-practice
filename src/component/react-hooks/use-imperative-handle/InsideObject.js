import React, {forwardRef, useImperativeHandle, useState} from "react";
export default forwardRef(function InsideObject(props, ref){

    const [toggle , setToggle] = useState(false)

    useImperativeHandle(ref,() => ({
        changeToggle() {
            setToggle(!toggle)
        }
    }))

    return(
        <div>
            <button> Button from Inside Object</button>
            {toggle && <p>Toggle will be Enable/Disable on CLick</p>}
        </div>
    )
})