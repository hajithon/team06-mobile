// import statusCodes along with GoogleSignin
import {
    GoogleSignin,
    User,
    isErrorWithCode,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useState } from 'react';
  
interface GoogleLoginInfo {
    userInfo?: User,
    error?: string,
}

function useGoogleLogin() {
    const [ google, setGoogle ] = useState<GoogleLoginInfo>({});

    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setGoogle({ userInfo, error: undefined });
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        setGoogle({ error: "SIGN_IN_CANCELLED" });
                        break;
                    case statusCodes.IN_PROGRESS:
                        setGoogle({ error: "IN_PROGRESS" });
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        setGoogle({ error: "PLAY_SERVICES_NOT_AVAILABLE" });
                        break;
                    default:
                        console.log(error, error.code);
                        setGoogle({ error: "GOOGLE_OTHER" });
                }
            } else {
                setGoogle({ error: "OTHER" });
            }
        }
    };

    return { google, googleLogin };
}

export default useGoogleLogin;