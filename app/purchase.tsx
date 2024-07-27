import { ThemedView } from "@/components/ThemedView"
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { mockHeight, mockWidth } from "@/constants/StorageConfig";
import { black, grey, lightBlack, lightGery, mainThemeColor, veryDarkGery, white } from "@/assets/styles/RawColors";
import { ThemedButton } from "@/components/ThemedButton";
import { router } from "expo-router";
import Check from '@/assets/svg/check.svg';

const { width, height } = Dimensions.get("window");
const uw = width / mockWidth;
const uh = height / mockHeight;

const PurCheck = () => {
    return <SafeAreaProvider style={styles.container}>
        <Text style={styles.qrText}>
            결제 완료!
        </Text>
        <Check style={styles.check}></Check>
        <ThemedButton style={styles.backButton} text="뒤로가기" onPress={() => {
            router.back();
        }}/>
        <Text style={styles.qrText2}>
            보관현황에서 보관QR을
            확인하실 수 있습니다
        </Text>
    </SafeAreaProvider>
}

export default PurCheck;

const styles = StyleSheet.create({
    container: {
        backgroundColor: veryDarkGery,
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
        fontWeight: 'bold',
        color: white,
        textAlign: 'center',
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
        color: white,
        textAlign: 'center'
    },
    qrText3: {
        position: 'absolute',
        top: 680 * uh,
        left: 20 * uw,
        right: 20 * uw,
        fontSize: 20,
        color: white,
        textAlign: 'center'
    },
    check: {
        position: 'absolute',
        top: 300 * uh,
        left: 77 * uw
    }
});