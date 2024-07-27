import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ header: () => null }} name="index" />
    </Stack>
  );
}
