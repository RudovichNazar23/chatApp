import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api  from "../utils/api";

import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormErrorList from "./FormComponents/FormErrorList";
import FormButton from "./FormComponents/FormButton";

export default function RegistrationForm(){
    const [formErrors, setFormErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const currentTarget = event.currentTarget;
        const username = currentTarget.username.value;
        const password = currentTarget.password.value;
        const repeatPassword = currentTarget.repeatPassword.value;

        if(!username || !password || !repeatPassword) return;

        if(password !== repeatPassword) setFormErrors((prev) => prev.push("Passwords don't match"));

        const response = api.post("user_profile/user/", { username: username, password: password });
        response
        .then((res) => {
            if(res.status === 201) navigate("/");
        })
        .catch((error) => {
           for(const key in error.response.data){
            setFormErrors(error.response.data[key]);
           }
        });
    };
    return (
        <form className="p-3" onSubmit={onSubmitHandler}>
            <FormHeader headerValue={"Registration"}/>
            <hr/>
            <FormGroup labelName={"Username"} inputId={"username"}/>
            <FormGroup labelName={"Password"} inputType={"password"} inputId={"password"}/>
            <FormGroup labelName={"Repeat password"} inputType={"password"} inputId={"repeatPassword"}/>
            <FormErrorList formErrors={formErrors}/>
            <FormButton/>
        </form>
    );
};