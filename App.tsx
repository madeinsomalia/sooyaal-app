import ToggleMode from "@/components/ToggleMode";
import { useTheme } from "@/theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function App() {
  const { colors, dark } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.primary }]}
    >
      <Text style={[{ color: colors.text }]}>
        Open up App.tsx to start working on your app! s
      </Text>
      <ToggleMode />
      <StatusBar style={dark ? "light" : "dark"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
