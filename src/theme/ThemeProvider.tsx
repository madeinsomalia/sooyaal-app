import { createContext, useState, useEffect, useContext } from "react";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "./colors";

interface IContextProps {
  dark: boolean;
  colors: typeof lightColors;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<IContextProps>({
  dark: false,
  colors: lightColors,
  setMode(mode) {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme == "dark");

  useEffect(() => {
    setIsDark(colorScheme == "dark");
  }, [colorScheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setMode: (mode: string) => setIsDark(mode == "dark"),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
