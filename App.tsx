import AppNavigator from "@/routers/Navigator";
import { useTheme } from "@/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
// import * as Network from "expo-network";

export default function App() {
  const { dark } = useTheme();

  // useEffect(() => {
  //   Network.getNetworkStateAsync().then((state) => {
  //     console.log(state);
  //   });
  // }, []);

  return (
    <>
      <AppNavigator />
      <Toast />
      <StatusBar style={dark ? "light" : "dark"} />
    </>
  );
}
