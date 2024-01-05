import React, {useContext, useState} from "react";
import Axios from "axios";
import {AppContext} from "../../App";
import CustomReactHook from "../custom-hooks/CustomReactHook";
import {useFetch} from "../custom-hooks/useFetch";

export default function AxiosFetchAPIDataForCustomHooks() {
    const {userName}  = useContext(AppContext)
    const {data , loading} = useFetch("https://catfact.ninja/fact")


    return(
        <div>
            {/*<button onClick={() =>getData}>Fetch Cat Facts for {userName}</button>*/}
            <h1>{data?.fact}</h1>
            <h3>{data?.length}</h3>
            <CustomReactHook/>
        </div>
    )
}