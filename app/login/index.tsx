import { ThemedButton } from "@/components/ThemedButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleButton } from "@/components/GoogleButton";
import { useEffect } from "react";
import { useSession } from "@/context/SessionContext";
import { KakaoButton } from "@/components/KakaoButton";

const LoginIndex = () => {
    const { user, session, googleSignIn, kakaoSignIn } = useSession();

    useEffect(() => {
        if(!!session && !!user){
            console.log("login confirm")
        }
    }, [user, session])

    return <SafeAreaProvider> 
        <GoogleButton onPress={() => {
            googleSignIn();
        }} />
        <KakaoButton onPress={() => {
            kakaoSignIn();
        }} />
    </SafeAreaProvider>;
}

export default LoginIndex;

