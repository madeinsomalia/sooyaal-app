import React from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import App from "./App";
import { CustomFontsProvider } from "@/contexts/FontsContext";

export default function index() {
  return (
    <CustomFontsProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CustomFontsProvider>
  );
}
