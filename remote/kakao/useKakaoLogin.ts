import {
    login,
    logout,
    getProfile as getKakaoProfile,
    shippingAddresses as getKakaoShippingAddresses,
    unlink,
    KakaoOAuthToken,
    KakaoProfile,
    getProfile,
} from "@react-native-seoul/kakao-login";
import { useState } from "react";

interface KakaoLoginInfo {
    token?: KakaoOAuthToken,
    user?: KakaoProfile,
    error?: string,
}

function useKakaoLogin() {
    const [ kakao, setKakao ] = useState<KakaoLoginInfo>({});

    const signInWithKakao = async (): Promise<void> => {
        const token: KakaoOAuthToken = await login();
        if(token) {
            setKakao({ token: token });
            getKakaoProfile();
        }
    };
      
    const signOutWithKakao = async (): Promise<void> => {
        //const message = 
        await logout();
        setKakao({});
    };
      
      const getKakaoProfile = async (): Promise<void> => {
        const profile: KakaoProfile = await getProfile();
      
        setKakao((prev) => {
            return { ...prev, user: profile };
        });
    };

    return { kakao, signInWithKakao, signOutWithKakao, getKakaoProfile };
}

export default useKakaoLogin;