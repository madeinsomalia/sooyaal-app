import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";

export default function WelcomeScreen() {
  const { colors } = useTheme();
  return (
    <View>
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
          },
        ]}
      >
        Welcome to React Native!
      </Text>
    </View>
  );
}
