import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import { useForm } from "react-hook-form";
export default function SignUp(){

    const {register , handleSubmit} = useForm()
    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div className="myCard">
            <div className="card auth-card input-field">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="logo purple-text text-lighten-1">Kerin Shah </h2>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                    <input
                        type="password"
                        placeholder="Conform Password"
                        {...register("conform password")}
                    />
                    <input
                        className="btn waves-effect waves-light purple lighten-2"
                        type="submit"/>

                </form>
                <p>
                    {" "}
                    <Link to="/signin">
                        <u>Already Have An Account ?</u>
                    </Link>
                </p>

            </div>
        </div>
    );
}