import React from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import { useContext} from "react";
import { AppContext} from "../App";


export default function NavBar(){
    const {userName}  = useContext(AppContext)
    return (
            <div>
                <nav>
                    <div className="nav-wrapper green green-text" >
                        <Link to="/" className="brand-logo left"> {userName}  </Link>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/excuseApp">excuseApp</Link></li>
                            <li><Link to="/profile">profile</Link></li>
                            <li><Link to="/reactQuery">React Query</Link></li>
                            <li><Link to="/signUp">React Hook Form</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}