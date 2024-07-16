import { useNavigate } from "react-router-dom";
import FormNavBar from "./FormComponents/FormNavBar";

import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

import { useState } from "react";

export default function FormContainer(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onClickHandler = (event) => {
        event.preventDefault();

        isOpen ? navigate("/login") : navigate("/registration");
        setIsOpen(!isOpen);
    };

    return (
        <div className="d-flex flex-column align-items-center"
             style={{height: "925px"}}
        >
            <FormNavBar onClickHandler={onClickHandler} isOpen={isOpen} />
            <div className="mt-3">
                {
                    !isOpen ? <LoginForm /> : <RegistrationForm />
                }
            </div>
        </div>
    );
};