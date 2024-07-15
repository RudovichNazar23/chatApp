import { useState, useEffect } from "react";

export default function FormErrorList({ formErrors }){
    const [errors, setErrors] = useState(formErrors);

    useEffect(
        () => {
            setErrors(formErrors)
        }, [errors]
    );

    return (
        <ul>
            {
                errors && (
                    errors.map(
                        (error, errorIndex) => {
                            return <li className="text-danger" key={errorIndex}>
                                {error}
                            </li>
                        }
                    )
                )
            }
        </ul>
    );
};