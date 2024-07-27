import { ThemedButton } from "@/components/ThemedButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleButton } from "@/components/GoogleButton";

const LoginIndex = () => {


    return <SafeAreaProvider> 

        

        <ThemedButton text="로그인" onPress={() => {}} />
        <GoogleButton></GoogleButton>
    </SafeAreaProvider>;
}

export default LoginIndex;