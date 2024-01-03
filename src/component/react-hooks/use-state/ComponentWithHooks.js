import React , {useState} from "react";

export default function ComponentWithHooks() {
    const [index, setIndex ] = useState(0);
    let [ name , setName] = useState("kerin")

    function handleClick() {
        setIndex(index + 1);
        setName(name.concat(index))
    }

    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h3>
                {index}
            </h3>
            <h3>
                {name}
            </h3>
        </>
    )
}