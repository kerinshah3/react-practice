import React , {useState , useEffect} from "react";

export default function ComponentLifecycle() {
    const [test, setTest] = useState("")
    const [showHide , setShowHide] = useState(false)
    useEffect(() => {
        console.log("MOUNTING")
        return () => {
            console.log("UNMOUNTING")
        }
    })
    return(
        <div>
            <div style={{display: showHide ? 'block' : 'none'}}>
                <input onChange={(event) => setTest(event.target.value) }/>
                <h2>{test}</h2>
            </div>
            <button onClick={() => setShowHide(!showHide)}> Show/Hide Button</button>
        </div>
    )
}