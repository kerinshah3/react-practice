import React , {useState} from "react";

export default function IncreaseDecreaseCounter(){
    let [counter , setCounter] = useState(0)

    function resetCounter() {
        console.log("Here in resetCounter" + counter)

        setCounter(0)

    }

    function decreaseCounter() {
        console.log("Here in decreaseCounter" +counter)

        setCounter(counter-1)
    }

    function increaseCounter() {
        console.log("Here in increaseCounter" +counter)
        setCounter(counter+ 1)
    }

    return(
        <>
            <button onClick={increaseCounter}>
                Increase
            </button>
            <button onClick={decreaseCounter}>
                Decrease
            </button>
            <button onClick={resetCounter}>
                Reset to Zero
            </button>
            <h3>
                {counter}
            </h3>
        </>
    )
}