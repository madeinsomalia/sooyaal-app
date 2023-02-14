import { fonts } from "@/constants/fonts";
import { useTheme } from "@/theme/ThemeProvider";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  label: string;
  placeholder: string;
  type: string;
  style?: any;
  [x: string]: any;
} & React.ComponentProps<typeof TextInput>;

export default function TextField({
  label,
  placeholder,
  style,
  type,
  ...other
}: Props) {
  const { colors } = useTheme();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontFamily: fonts.primary.medium,
          fontSize: 16,
          marginBottom: 10,
        }}
      >
        {label}
      </Text>
      <TextInput
        {...other}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: 50,
          marginBottom: 15,
          fontFamily: fonts.primary.regular,
          fontSize: 16,
          borderWidth: 0.7,
          opacity: 0.4,
          paddingHorizontal: 10,
          borderRadius: 10,
          color: colors.text,
          backgroundColor: colors.primary,
          borderColor: colors.text,
          position: "relative",
          paddingLeft: 40,
        }}
        placeholderTextColor={colors.text}
        secureTextEntry={type === "password" && !passwordVisible}
      />
      <Ionicons
        name="key-outline"
        size={20}
        color={colors.text}
        style={{
          position: "absolute",
          left: 30,
          top: 45,
        }}
      />
      {type === "password" && (
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 30,
            bottom: 28,
          }}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <Ionicons name="eye-off-outline" size={20} color={colors.text} />
          ) : (
            <Ionicons name="eye-outline" size={20} color={colors.text} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
