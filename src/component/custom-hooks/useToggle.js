import React, {useState} from "react";

export default function useToggle(initialValue = false){
    const [state, setState ] = useState(initialValue);

    function toggle() {
        setState((prev) => !prev)
    }

    return [state,toggle]
}