import React, {useContext} from "react";
import ChangeProfile from "./react-hooks/use-context/ChangeProfile";
import {AppContext} from "../App";

export default function Profile(props) {
    const {userName}  = useContext(AppContext)

    return (
        <div>
            <h1>Profile Page for {userName}</h1>
        <ChangeProfile/>
        </div>
    )
}