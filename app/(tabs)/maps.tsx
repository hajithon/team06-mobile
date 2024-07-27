import { ThemedView } from "@/components/ThemedView"
import { Dimensions, StyleSheet, Text } from "react-native"
import MapView from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MapIndex = () => {
    return <SafeAreaProvider>
        <MapView
        provider={'google'}
        style={styles.map}
        initialRegion={{
            latitude: 37.541,
            longitude: 126.986,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaProvider>
}

export default MapIndex;

const styles = StyleSheet.create({
    map: {
        flex:1
    }
});