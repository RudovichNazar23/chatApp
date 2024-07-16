import FormHeader from "./FormComponents/FormHeader";
import FormGroup from "./FormComponents/FormGroup";
import FormErrorList from "./FormComponents/FormErrorList";
import FormButton from "./FormComponents/FormButton";

export default function RegistrationForm(){
    return (
        <form className="p-3">
            <FormHeader headerValue={"Registration"}/>
            <hr/>
            <FormGroup labelName={"Username"}/>
            <FormGroup labelName={"Password"} inputType={"password"}/>
            <FormGroup labelName={"Repeat password"} inputType={"password"}/>
            <FormErrorList formErrors={[]}/>
            <FormButton/>
        </form>
    );
};