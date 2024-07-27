import { ThemedButton } from "@/components/ThemedButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleButton } from "@/components/GoogleButton";
import useGoogleLogin from "@/remote/google/useGoogleLogin";
import { useEffect } from "react";

const LoginIndex = () => {
    const { google, googleLogin } = useGoogleLogin();

    useEffect(() => {
        console.log(google);
    }, [google])

    return <SafeAreaProvider> 

        <GoogleButton onPress={() => {
            googleLogin();
            console.log("pressed");
        }}></GoogleButton>
    </SafeAreaProvider>;
}

export default LoginIndex;