import "../index.css";

import { useState } from "react";
import api from "../utils/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormErrorList from "./FormComponents/FormErrorList";
import FormButton from "./FormComponents/FormButton";

export default function LoginForm(){
    const [formErrors, setFormErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const currentTarget = event.currentTarget;
        const username = currentTarget.username.value;
        const password = currentTarget.password.value;

        if(!username || !password) return;

        const response = api.post("/auth/token/", { username, password });
        response
        .then((res) => {
            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            }
        })
        .catch((error) => setFormErrors((prev) => prev.push(error.response.data.detail)));
    };

    return (
        <form className="p-3" onSubmit={onSubmitHandler}>
            <FormHeader headerValue={"Login"}/>
            <hr/>
            <FormGroup labelName={"Username"} inputType={"text"} inputId={"username"}/>
            <FormGroup labelName={"Password"} inputType={"password"} inputId={"password"}/>
            <FormErrorList formErrors={formErrors}/>
            <FormButton/>
        </form>
    );
};