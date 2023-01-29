import React from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import App from "./App";

export default function index() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
