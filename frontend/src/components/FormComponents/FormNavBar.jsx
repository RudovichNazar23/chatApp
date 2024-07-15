import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormNavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onClickHandler = (event) => {
        if(isOpen){
            setIsOpen(false);
            navigate("/login");
        }
        else {
            setIsOpen(true);
            navigate("/registration");
        }
    };

    return (
        <nav class="navbar navbar-light bg-light" style={{width: "100%"}}>
            <div class="container-fluid">
                <a class="navbar-brand">
                    <i className="m-1">chatApp</i>
                    <img src="/chat.png" width="40" height="40" class="d-inline-block align-text-top m-1" />
                </a>
                <div className="" style={{float: "right"}}>
                    <a href="#" className="nav-link" onClick={onClickHandler}>
                        {
                            isOpen ? "Login" : "Registration"
                        }
                    </a>
                </div>
            </div>
        </nav>
    );
};