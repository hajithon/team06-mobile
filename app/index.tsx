import { ThemedButton } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";
import { Link, router } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BannerTitle from '@/assets/svg/bannertitle.svg';
import BannerBack from '@/assets/svg/bannerback.svg';
import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { lightBlack, veryLightGery } from "@/assets/styles/RawColors";
import { ThemedLink } from "@/components/ThemedLink";
import { mockHeight, mockWidth } from "@/constants/StorageConfig";

const { width, height } = Dimensions.get("window");
const uw = width / mockWidth;
const uh = height / mockHeight;

function AppIndex() {
    const color = useColorScheme();

    return <SafeAreaProvider style={styles.container}>
        <BannerBack width={width} height={width} style={styles.back}></BannerBack>
        <BannerTitle style={styles.banner}></BannerTitle>
        <ThemedButton containerStyle={styles.button} text="가입하기" type="onboard" onPress={() => {
            router.navigate("/login");
        }}></ThemedButton>
        <Text style={[ styles.text, {color: veryLightGery, textAlign: 'center'} ]}>계정이 이미 있으신가요? <ThemedLink type="onboard" href="/login">로그인하기</ThemedLink></Text>
    </SafeAreaProvider>
}

export default AppIndex;

const styles = StyleSheet.create({
    container: { 
        position: 'relative',
        backgroundColor: lightBlack,
        display: 'flex',
        alignItems: 'center'
    },
    banner: {
        position: 'absolute',
        top: 162 * uh,
        left: 20 * uw,
        right: 20 * uw,
    },
    back: {
        position: 'absolute',
        top: 350 * uh
    },
    button: {
        position: 'absolute',
        top: 673 * uh,
        bottom: 51 * uh,
        left: 20 * uw,
        right: 20 * uw,
        height: 60,
        lineHeight: 60
    },
    text: {
        position: 'absolute',
        bottom: 41 * uh,
        left: 20 * uw,
        right: 20 * uw,
    }
});