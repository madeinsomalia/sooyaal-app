import AppNavigator from "@/routers/Navigator";
import { useTheme } from "@/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function App() {
  const { dark } = useTheme();

  return (
    <>
      <AppNavigator />
      <Toast />
      <StatusBar style={dark ? "light" : "dark"} />
    </>
  );
}
