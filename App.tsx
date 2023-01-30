import AppNavigator from "@/routers";
import { useTheme } from "@/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
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
      <StatusBar style={dark ? "light" : "dark"} />
    </>
  );
}
