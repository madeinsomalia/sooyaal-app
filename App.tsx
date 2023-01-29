import AppNavigator from "@/routers";
import { useTheme } from "@/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const { dark } = useTheme();
  return (
    <>
      <AppNavigator />
      <StatusBar style={dark ? "light" : "dark"} />
    </>
  );
}
