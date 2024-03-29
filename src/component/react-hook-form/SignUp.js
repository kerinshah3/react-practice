import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup  from 'yup'

export default function SignUp(){
    const schema = yup.object().shape({
        name: yup.string().required().min(3),
        email: yup.string().email().required(),
        age: yup.number().positive().required().integer().min(15),
        password: yup.string().min(8).max(20).required(),
        conformPassword: yup.string().oneOf([yup.ref("password"),null]).required()
    })
    const {register , handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })
    function onSubmit(data) {
        // Database / Backend Call will come here
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
                    <p className="red-text">{errors.name?.message}</p>
                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        {...register("age")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                    <input
                        type="password"
                        placeholder="Conform Password"
                        {...register("conformPassword")}
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