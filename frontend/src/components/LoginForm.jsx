import "../index.css";

import { useState } from "react";

import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormErrorList from "./FormComponents/FormErrorList";
import FormButton from "./FormComponents/FormButton";

export default function LoginForm(){
    const [formErrors, setFormErrors] = useState([]);

    return (
        <form className="p-3">
            <FormHeader headerValue={"Login"}/>
            <hr/>
            <FormGroup labelName={"Username"} inputType={"text"}/>
            <FormGroup labelName={"Password"} inputType={"password"}/>
            <FormErrorList formErrors={formErrors}/>
            <FormButton/>
        </form>
    );
};