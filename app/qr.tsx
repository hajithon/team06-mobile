import { ThemedView } from "@/components/ThemedView"
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { mockHeight, mockWidth } from "@/constants/StorageConfig";
import { black, grey, lightBlack, lightGery, mainThemeColor, white } from "@/assets/styles/RawColors";
import { ThemedButton } from "@/components/ThemedButton";
import { router } from "expo-router";
import QRCode from "react-native-qrcode-svg";

const { width, height } = Dimensions.get("window");
const uw = width / mockWidth;
const uh = height / mockHeight;

const TabsIndex = () => {
    const [ qr, setQr ] = useState(true);

    return <SafeAreaProvider style={styles.container}>
        <Text style={styles.qrText}>
            가맹점 직원에게
            해당 QR을 보여주세요
        </Text>
        <View style={{ top: 230 * uh, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }}>
            <QRCode value="https://www.naver.com" size={300}></QRCode>
        </View>
        <ThemedButton style={styles.backButton} text="뒤로가기" type="greyed" onPress={() => {
            router.navigate('/retrieve');
        }}/>
        <Text style={styles.qrText2}>
            반납과 동시에 1,200원이 추가 결제됩니다.
        </Text>
        <Text style={styles.qrText3}>
            자동결제 미등록시 직접 결제
        </Text>
    </SafeAreaProvider>
}

export default TabsIndex;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        position: 'relative',
        flex: 1,
        flexDirection: 'column'
    },
    qrText: {
        position: 'absolute',
        top: 100 * uh,
        left: 20 * uw,
        right: 20 * uw,
        fontSize: 30,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        top: 586 * uh,
        left: 20 * uw,
        right: 20 * uw,
        height: 60
    },
    qrText2: {
        position: 'absolute',
        top: 650 * uh,
        left: 20 * uw,
        right: 20 * uw,
        fontSize: 20,
        color: black,
        textAlign: 'center'
    },
    qrText3: {
        position: 'absolute',
        top: 680 * uh,
        left: 20 * uw,
        right: 20 * uw,
        fontSize: 20,
        color: grey,
        textAlign: 'center'
    },
});