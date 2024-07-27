import SafeInset from "@/components/SafeInset";
import { SessionProvider } from "@/context/SessionContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

GoogleSignin.configure({
  webClientId: '223026660922-g91m6f0k7tf8t8hbdpus15kt36bna9ui.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  iosClientId: '223026660922-lh8mo6bka6evprij0e7qg1fh74q7ednk.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <Stack screenOptions={{
          // Hide the header for all other routes.
          header: () => { return <SafeInset/> }
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SessionProvider>
  );
}
