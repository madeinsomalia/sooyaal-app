import React from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import App from "./App";
import { CustomFontsProvider } from "@/contexts/FontsContext";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/app/store";
import { Provider } from "react-redux";

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <CustomFontsProvider>
            <App />
          </CustomFontsProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
