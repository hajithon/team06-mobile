import { ThemedView } from "@/components/ThemedView"
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import QRCode from 'react-native-qrcode-svg';
import { Link, router } from "expo-router";
import { useState } from "react";
import { mockHeight, mockWidth } from "@/constants/StorageConfig";
import { grey, lightBlack, mainThemeColor, white } from "@/assets/styles/RawColors";
import Logo from '@/assets/svg/logo.svg';
import Noti from '@/assets/svg/noti.svg';
import { ThemedButton } from "@/components/ThemedButton";
import { useSession } from "@/context/SessionContext";
import GQR from '@/assets/svg/gqr.svg';
import GQR1 from '@/assets/svg/gqr1.svg';
import GQR2 from '@/assets/svg/gqr2.svg';
import timeDifference from "@/util/formatTime";

const { width, height } = Dimensions.get("window");
const uw = width / mockWidth;
const uh = height / mockHeight;

const TabsIndex = () => {
    const [ hasRes, setHasRes ] = useState(true);
    const [ oldTime, setOldTime ] = useState(new Date());
    const [ money, setMoney ] = useState(0);
    const { user } = useSession();

    return <SafeAreaProvider style={styles.container}>
        {!hasRes ? <View style={styles.container}>
            <Image style={styles.backImage} source={require('../../../assets/images/background_p.png')}></Image>
            <Text style={styles.noText1}>현재 보관중인 짐이 없습니다</Text>
            <Text style={styles.noText2}>러닝을 즐기실 장소 인근의 보관함을 찾아보세요!</Text>
            <ThemedButton text="보관함 찾기" style={styles.buttonSearch} onPress={() => {
                router.navigate('/home/maps')
            }}></ThemedButton>
        </View> : null}
        {!!hasRes && <View style={[styles.container]}>
            <Text style={styles.text1}>{`현재 ${user?.name}님의 짐을 보관중입니다`}</Text>
            <GQR style={styles.gqr}></GQR>
            <GQR1 style={styles.gqr1}></GQR1>
            <GQR2 style={styles.gqr2}></GQR2>
            <Text style={styles.text2}>보관시간</Text>
            <Text style={styles.text2_1}>{`${timeDifference(new Date(), oldTime)}`}</Text>
            <Text style={styles.text3}>{`${money}원 추가 결제 예정`}</Text>
            <ThemedButton style={styles.returnButton} text="회수하기" onPress={() => {
                router.navigate('/qr');
            }}></ThemedButton>
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
        flex: 1,
        flexDirection: 'column'
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
    text1: {
        position: 'absolute',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        top: 88 * uh,
        left: 88 * uw,
        right: 88 * uw,
    },
    text2: {
        position: 'absolute',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        top: 400 * uh,
        left: 0,
        right: 0,
    },
    text2_1: {
        position: 'absolute',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        top: 440 * uh,
        left: 0,
        right: 0,
    },
    text3: {
        position: 'absolute',
        fontWeight: 'bold',
        textAlign: 'center',
        color: grey,
        fontSize: 20,
        top: 480 * uh,
        left: 0,
        right: 0,
    },
    gqr: {
        position: 'absolute',
        top: 220 * uh,
        left: 140 * uw,
        right: 140 * uw,
    },
    gqr1: {
        position: 'absolute',
        top: 158 * uh,
        left: 80 * uw,
        right: 80 * uw,
    },
    gqr2: {
        position: 'absolute',
        top: 212.5 * uh,
        left: 132.5 * uw,
        right: 132.5 * uw,
    },
    returnButton: {
        position: 'absolute',
        top: 586 * uh,
        left: 121 * uw,
        right: 121 * uw,
        height: 60
    }
});