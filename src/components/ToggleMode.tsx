import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";

export default function ToggleMode({ styles }: { styles?: any }) {
  const { dark, setMode } = useTheme();
  return (
    <SafeAreaView
      style={
        styles
          ? styles
          : {
              position: "absolute",
              top: 50,
              right: 25,
              zIndex: 100,
            }
      }
    >
      <TouchableOpacity onPress={() => setMode(dark ? "light" : "dark")}>
        {dark ? (
          <Ionicons name="sunny-outline" size={24} color="white" />
        ) : (
          <Ionicons name="moon-outline" size={24} color="black" />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
