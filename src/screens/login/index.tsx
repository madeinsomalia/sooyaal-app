import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/theme/ThemeProvider";

export default function LoginScreen() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.primary,
      }}
    >
      <Text style={{ color: colors.text }}>Login Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
