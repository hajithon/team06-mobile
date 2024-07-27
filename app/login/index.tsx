import { ThemedButton } from "@/components/ThemedButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleButton } from "@/components/GoogleButton";
import { useEffect } from "react";
import { useSession } from "@/context/SessionContext";

const LoginIndex = () => {
    const { user, session, googleSignIn } = useSession();

    useEffect(() => {
        if(!!session && !!user){
            console.log("login confirm")
        }
    }, [user, session])

    return <SafeAreaProvider> 
        <GoogleButton onPress={() => {
            googleSignIn();
        }}></GoogleButton>
    </SafeAreaProvider>;
}

export default LoginIndex;

