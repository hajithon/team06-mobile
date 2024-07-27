import { ThemedView } from "@/components/ThemedView"
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import QRCode from 'react-native-qrcode-svg';
import { Link, router } from "expo-router";
import { useState } from "react";
import { mockHeight, mockWidth } from "@/constants/StorageConfig";
import { lightBlack, mainThemeColor, white } from "@/assets/styles/RawColors";
import Logo from '@/assets/svg/logo.svg';
import Noti from '@/assets/svg/noti.svg';
import { ThemedButton } from "@/components/ThemedButton";

const { width, height } = Dimensions.get("window");
const uw = width / mockWidth;
const uh = height / mockHeight;

const TabsIndex = () => {
    const [ hasRes, setHasRes ] = useState(false);

    return <SafeAreaProvider style={styles.container}>
        {!false ? <View style={styles.container}>
            <Image style={styles.backImage} source={require('../../../assets/images/background_p.png')}></Image>
            <Text style={styles.noText1}>현재 보관중인 짐이 없습니다</Text>
            <Text style={styles.noText2}>러닝을 즐기실 장소 인근의 보관함을 찾아보세요!</Text>
            <ThemedButton text="보관함 찾기" style={styles.buttonSearch} onPress={() => {
                router.navigate('/home/maps')
            }}></ThemedButton>
        </View> : null}
        {!!false && <View style={styles.container}>
            <QRCode value="https://www.naver.com" />
            <Link href={"/login"}>We need something to click</Link>
        </View>}
        <Pressable style={styles.icon1}>
            <Logo></Logo>
        </Pressable>
        <Pressable style={styles.icon2}>
            <Noti></Noti>
        </Pressable>
    </SafeAreaProvider>
}

export default TabsIndex;

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightBlack,
        position: 'relative',
        flex: 1
    },
    noText1: {
        position:'absolute',
        color: white,
        top: 82 * uh,
        left: 0,
        right: 0,
        textAlign: 'center'
    },
    noText2: {
        position:'absolute',
        color: mainThemeColor,
        top: 100 * uh,
        left: 20 * uw,
        right: 20 * uw,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    icon1: {
        position:'absolute',
        top: 30,
        left: 30,
    },
    icon2: {
        position:'absolute',
        top: 30,
        right: 30,
    },
    backImage: {
        position:'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: width,
        height: height
    },
    buttonSearch: {
        position:'absolute',
        top: 222.5 * uh,
        left: 110 * uw,
        right: 110 * uw,
        height: 50
    },
});