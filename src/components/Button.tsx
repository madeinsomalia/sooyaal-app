import { useTheme } from "@/theme/ThemeProvider";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ActivityIndicator,
} from "react-native";

interface IButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  variant: "outlined" | "contained" | "text";
  onPress?: () => void;
  style?: StyleProp<any>;
}

export default function Button({
  loading,
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
      borderRadius: 50,
    },
    text: {
      backgroundColor: colors.primary,
      borderRadius: 5,
    },
  };

  const defaultBtnStyles = {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    opacity: 0.8,
  };
  return (
    <TouchableOpacity
      onPress={!loading ? onPress : undefined}
      style={{
        ...defaultBtnStyles,
        ...styles[variant],
        ...style,
      }}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
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
      )}
    </TouchableOpacity>
  );
}
