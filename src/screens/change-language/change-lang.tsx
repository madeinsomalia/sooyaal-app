import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "@/components";
import { useTheme } from "@/theme/ThemeProvider";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";

export default function ChangeLanguageScreen() {
  const navigation = useNavigation();
  const { dark, colors } = useTheme();

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon navigation={navigation} />,
    });
  }, [dark, navigation]);

  const { t, i18n } = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: -50,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 20,
          marginBottom: 40,
          fontFamily: "Inter_700Bold",
        }}
      >
        {t("change-language")}
      </Text>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",

          backgroundColor: colors.cardBg,
        }}
        onPress={() => i18n.changeLanguage("en")}
        disabled={i18n.language === "en"}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name={
              i18n.language === "en" ? "radio-button-on" : "radio-button-off"
            }
            size={24}
            color={colors.text}
          />
          <Text
            style={{
              marginLeft: 10,
              color: colors.text,
              fontSize: 15,
              fontFamily: "Inter_400Regular",
            }}
          >
            English
          </Text>
        </View>

        <Image
          style={{
            width: 60,
            height: 60,

            marginLeft: 50,
          }}
          source={require("../../../assets/flags/en.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginTop: 20,
          justifyContent: "space-around",

          backgroundColor: colors.cardBg,
        }}
        onPress={() => i18n.changeLanguage("so")}
        disabled={i18n.language === "so"}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name={
              i18n.language === "so" ? "radio-button-on" : "radio-button-off"
            }
            size={24}
            color={colors.text}
          />
          <Text
            style={{
              marginLeft: 10,
              color: colors.text,
              fontSize: 15,
              fontFamily: "Inter_400Regular",
            }}
          >
            Somali
          </Text>
        </View>

        <Image
          style={{
            width: 60,
            height: 60,

            marginLeft: 50,
          }}
          source={require("../../../assets/flags/so.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
