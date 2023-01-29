import { ToggleMode } from "@/components";
import { WelcomeScreen } from "@/screens";
import { useTheme } from "@/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  const { dark, colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <WelcomeScreen />
      <ToggleMode />
      <StatusBar style={dark ? "light" : "dark"} />
    </View>
  );
}
