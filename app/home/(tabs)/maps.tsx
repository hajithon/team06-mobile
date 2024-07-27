import { grey, lightBlack, mainLightThemeColor, mainThemeColor } from "@/assets/styles/RawColors";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView"
import { useEffect, useRef, useState } from "react";
import { Dimensions, PermissionsAndroid, Platform, Pressable, StyleSheet, Text } from "react-native"
import { Geometry, GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

const GOOGLE_PLACES_API_KEY = "AIzaSyB0yDs8dfpPN_RBewa-LfAhPEeofeR8gyQ";

const MapIndex = () => {
    const ref = useRef<MapView | null>(null);

    const [region, setRegion] = useState<{
        latitude : number,
        longitude: number,
        latitudeDelta: number,
        longitudeDelta: number,
    } | null>(null);
    const [places, setPlaces] = useState<GooglePlaceDetail[]>([]);

    useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
        } else {
          console.log('Location permission denied');
        }
      }
    };

    requestLocationPermission();

    Geolocation.getCurrentPosition(
      (position: GeolocationResponse) => {
        const { latitude, longitude } = position.coords;
        setRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        });
        fetchPlaces(latitude, longitude);
      },
      (error: any) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  const fetchPlaces = (latitude:number, longitude: number) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=convenience_store&key=${GOOGLE_PLACES_API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => setPlaces(data.results))
        .catch(error => console.log(error));
    };

    return <SafeAreaProvider style={styles.container}>
        {region && (
        <MapView
            ref={ref}
            style={styles.map}
            region={region}
            showsUserLocation={true}
        >
          {places.map((place : GooglePlaceDetail, index) => (
            <Marker
                key={index}
                coordinate={{
                    latitude: place.geometry.location.lat,
                    longitude: place.geometry.location.lng,
                }}
                title={place.name}
                description={place.vicinity}
                onPress={(e) => {
                }}
            />
          ))}
        </MapView>
      )}
        <ThemedView style={styles.search}>
            <Text style={{ padding: 16, fontSize: 25, fontWeight: 'bold', color: 'white' }}>보관함 찾기</Text>
            <GooglePlacesAutocomplete
                minLength={2}
                placeholder="장소를 검색해보세요!"
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: "ko",
                    components: "country:kr",
                }}
                keyboardShouldPersistTaps={"handled"}
                fetchDetails={true}
                onPress={(data, details) => {
                    setPlaces(prev => {
                        const newRegion = {
                            latitude: details!.geometry.location.lat,
                            longitude: details!.geometry.location.lng,
                            latitudeDelta: 0.001,
                            longitudeDelta: 0.001,
                        }
                        setRegion(newRegion);
                        ref.current?.animateToRegion(newRegion, 500);
                        return [...prev, details!];
                    })
                }}
                onFail={(error) => console.log(error)}
                onNotFound={() => console.log("no results")}
                keepResultsAfterBlur={true}
                enablePoweredByContainer={false}
                styles={styles.search}
            />
        </ThemedView>

        <Pressable style={styles.buttonUpper}>
            <Text>킵러닝 보관함</Text>
        </Pressable>
        <Pressable style={styles.buttonUpper2}>
            <Text>일반 보관함</Text>
        </Pressable>

    </SafeAreaProvider>
}

export default MapIndex;

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightBlack,
        position: 'relative',
        flex: 1
    },
    map: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 120
    },
    search: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: lightBlack
    },
    buttonUpper: {
        position: 'absolute',
        backgroundColor: mainLightThemeColor,
        left: 20,
        bottom: 130,
        borderRadius: 10,
        padding: 5,
        borderColor: mainThemeColor
    },
    buttonUpper2: {
        position: 'absolute',
        backgroundColor: grey,
        left: 120,
        bottom: 130,
        borderRadius: 10,
        padding: 5,
        borderColor: mainThemeColor
    }
});