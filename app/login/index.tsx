import { ThemedButton } from "@/components/ThemedButton";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GoogleButton } from "@/components/GoogleButton";
import { useEffect } from "react";
import { useSession } from "@/context/SessionContext";
import { KakaoButton } from "@/components/KakaoButton";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { darkGery, lightBlack, lightGery, white } from "@/assets/styles/RawColors";
import BannerBack from '@/assets/svg/bannerback.svg';
import { mockHeight, mockWidth } from "@/constants/StorageConfig";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");
const uw = width / mockWidth;
const uh = height / mockHeight;

const LoginIndex = () => {
    const { user, session, googleSignIn, kakaoSignIn } = useSession();

    useEffect(() => {
        if(!!session && !!user){
            router.navigate('/home');
        }
    }, [user, session])

    return <SafeAreaProvider style={styles.container}> 
        <BannerBack width={width} height={width} style={styles.back}/>
        <View style={styles.buttonContainer}>
            <Text style={styles.text1}>당신의 짐 두고 달리세요</Text>
            <Text style={styles.text2}>킵러닝</Text>
            <GoogleButton containerStyle={styles.googleButton} onPress={() => {
                googleSignIn();
            }} />
            <KakaoButton containerStyle={styles.kakaoButton} onPress={() => {
                kakaoSignIn();
            }} />
        </View>

    </SafeAreaProvider>;
}

export default LoginIndex;

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightBlack,
        position: 'relative',
        flex: 1
    },
    back: {
        position: 'absolute',
        top: 41 * uh
    },
    buttonContainer: {
        position: 'absolute',
        backgroundColor: darkGery,
        top: 301 * uh,
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    googleButton: {
        position: 'absolute',
        left: 16 * uw,
        right: 16 * uw,
        bottom: 150 * uh,
        borderRadius: 40,
        overflow: 'hidden'
    },
    kakaoButton: {
        position: 'absolute',
        left: 16 * uw,
        right: 16 * uw,
        bottom: 67 * uh,
        borderRadius: 40,
        overflow: 'hidden',
    },
    text1: {
        position: 'absolute',
        fontSize: 20,
        top: 35 * uh,
        left: 26 * uh,
        right: 26 * uh,
        color: white
    },
    text2: {
        position: 'absolute',
        fontSize: 28,
        fontWeight: 'bold',
        top: 60 * uh,
        left: 26 * uh,
        right: 26 * uh,
        color: white
    }
});

