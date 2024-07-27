import axios from "axios";
import { useState } from "react";
import { setToken } from "../Axios";

function useBackendLogin() {
    const [ sessionToken, setSession ] = useState("");

    const backendLogin = (token: string, type: string) => {
        if(type === "google") {
            axios.post('/api/oauth/login/GOOGLE', { token: token })
            .then((value) => {
                if(value.data.accessToken){
                    setToken(value.data.accessToken)
                    setSession(value.data.accessToken)
                }
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            axios.post('/api/oauth/login/KAKAO', { token: token })
            .then((value) => {
                if(value.data.accessToken){
                    setToken(value.data.accessToken)
                    setSession(value.data.accessToken)
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
    return { sessionToken, backendLogin };
}

export default useBackendLogin;