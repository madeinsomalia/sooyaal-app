import { ToggleMode } from "@/components";
import { WelcomeScreen } from "@/screens";
import { useTheme } from "@/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  const { colors, dark } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
    >
      <WelcomeScreen />
      <ToggleMode />
      <StatusBar style={dark ? "light" : "dark"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
