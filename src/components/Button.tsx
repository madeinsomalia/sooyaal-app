import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import { TouchableOpacity, Text, StyleProp } from "react-native";

interface IButtonProps {
  children: React.ReactNode;
  variant: "outlined" | "contained" | "text";
  onPress?: () => void;
  style?: StyleProp<any>;
}

export default function Button({
  children,
  variant,
  style,
  onPress,
}: IButtonProps) {
  const { colors } = useTheme();
  const styles = {
    outlined: {
      backgroundColor: colors.primary,
      borderWidth: 1,
      borderColor: colors.text,
      borderRadius: 5,
    },
    contained: {
      backgroundColor: colors.text,
      borderRadius: 5,
    },
    text: {
      backgroundColor: colors.primary,
      borderRadius: 5,
    },
  };

  const defaultBtnStyles = {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...defaultBtnStyles,
        ...styles[variant],
        ...style,
      }}
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
