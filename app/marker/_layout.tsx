import SafeInset from "@/components/SafeInset";
import { SessionProvider } from "@/context/SessionContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
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
