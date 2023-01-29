import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface IButtonProps {
  children: React.ReactNode;
  variant: "outlined" | "contained" | "text";
  onPress?: () => void;
}

export default function Button({ children, variant, onPress }: IButtonProps) {
  const { colors } = useTheme();
  const styles = {
    outlined: {
      backgroundColor: colors.primary,
      borderWidth: 1,
      borderColor: colors.text,
      padding: 0,
      borderRadius: 5,
    },
    contained: {
      backgroundColor: colors.text,
      padding: 0,
      borderRadius: 5,
    },
    text: {
      backgroundColor: colors.primary,
      padding: 0,
      borderRadius: 5,
    },
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
        },
        variant === "outlined"
          ? styles.outlined
          : variant === "contained"
          ? styles.contained
          : variant === "text" && styles.text,
      ]}
    >
      <Text
        style={{
          color:
            variant === "outlined"
              ? colors.text
              : variant === "contained"
              ? colors.primary
              : variant === "text"
              ? colors.text
              : colors.primary,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
