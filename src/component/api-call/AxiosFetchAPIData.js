import React, {useContext, useState} from "react";
import Axios from "axios";
import {AppContext} from "../../App";
import UseReducerHook from "../react-hooks/use-reducer/UseReducerHook";
import UseReduceWithComplexObject from "../react-hooks/use-reducer/UseReduceWithComplexObject";
import UseRefsHook from "../react-hooks/use-refs/UseRefsHook";
import UseLayoutEffectHook from "../react-hooks/use-layout-effect/UseLayoutEffectHook";

export default function AxiosFetchAPIData() {
    const {userName}  = useContext(AppContext)


    const [fact ,setFact] = useState("")
    const [length ,setLength] = useState()


    function fetchData() {
        Axios.get("https://catfact.ninja/fact")
            .then((res) =>  {
                setFact(res.data.fact)
                setLength(res.data.length)
            })
    }

    return(
        <div>
            <button onClick={fetchData}>Fetch Cat Facts for {userName}</button>
            <h1>{fact}</h1>
            <h3>{length}</h3>
            <UseReducerHook/>
            <UseReduceWithComplexObject/>
            <UseRefsHook/>
            <UseLayoutEffectHook/>
        </div>
    )
}