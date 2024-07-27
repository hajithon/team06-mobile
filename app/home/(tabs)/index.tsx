import { ThemedView } from "@/components/ThemedView"
import { Text } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import QRCode from 'react-native-qrcode-svg';
import { Link } from "expo-router";

const TabsIndex = () => {

    return <SafeAreaProvider>
        <QRCode value="https://www.naver.com" />
        <Link href={"/login"}>We need something to click</Link>
    </SafeAreaProvider>
}

export default TabsIndex;