import SafeInset from "@/components/SafeInset";
import { SessionProvider } from "@/context/SessionContext";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <SessionProvider>
      <Stack screenOptions={{
          // Hide the header for all other routes.
          header: () => { return <SafeInset/> }
        }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SessionProvider>
  );
}
