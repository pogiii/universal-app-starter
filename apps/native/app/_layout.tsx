import { Stack } from "expo-router";
import "../global.css";
import { useColorScheme } from "nativewind";

export default function RootLayout() {
  const { colorScheme, setColorScheme } = useColorScheme();
  setColorScheme("system");

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
