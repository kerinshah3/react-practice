import React, {useContext, useState} from "react";
import 'materialize-css/dist/css/materialize.min.css'
import {AppContext} from "../../../App";


export default function ChangeProfile() {
    const {setUserName}  = useContext(AppContext)

    const [newUserName , setNewUserName] = useState("")
    function changeUserName() {
        setUserName(newUserName)
    }
    return (
        <div>
            <input onChange={(event) => setNewUserName(event.target.value)}/>
            <button onClick={() => changeUserName()}>Change Profile name</button>
        </div>
    )
}