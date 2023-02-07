import { TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeProvider";

const BackIcon = ({ navigation }: { navigation: any }) => {
  const { colors, dark } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        padding: 10,
        backgroundColor: dark ? colors.cardBg : colors.secondary,
        borderRadius: 10,
      }}
    >
      <Entypo name="chevron-thin-left" size={24} color={colors.text} />
    </TouchableOpacity>
  );
};

export default BackIcon;
