import { Dimensions, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SafeInset() {
    return <View style={{width: width, height: height * 0.025}}/>
}