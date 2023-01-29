import React from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import App from "./App";
import { CustomFontsProvider } from "@/contexts/FontsContext";
// import { NavigationContainer } from "@react-navigation/native";
import { ToggleMode } from "@/components";

export default function index() {
  return (
    <CustomFontsProvider>
      <ThemeProvider>
        <App />
        <ToggleMode />
      </ThemeProvider>
    </CustomFontsProvider>
  );
}
