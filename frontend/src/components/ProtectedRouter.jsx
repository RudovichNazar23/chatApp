import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../utils/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";

import { useState, useEffect } from "react";


export default function ProtectedRouter({ children }){
    const [isAuthorized, setIsAuthorized] = useState(null);
    const navigate = useNavigate();

    useEffect(
        () => {
            auth().catch(() => setIsAuthorized(false));
        }, []
    );

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        try{
            const response = await api.post("/auth/token/refresh/", { refresh: refreshToken });
            if(response.status === 200){
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            }
            else{
                setIsAuthorized(false);
            }
        }
        catch (error){
            setIsAuthorized(false)
        }
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        if(!token){
            setIsAuthorized(false);
            return;
        };
        const decodedToken = jwtDecode(token);
        const tokenExpiration = decodedToken.exp;
        const currentTime = Date.now() / 1000;

        if(tokenExpiration < currentTime){
            await refreshToken();
        }
        else{
            setIsAuthorized(true);
        }
    };

    if(isAuthorized === null) return <div>Loading...</div>
    return isAuthorized ? children : navigate("/login");

};