import React from "react";
import { Linking, SafeAreaView, Text, View } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";
import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: colors.primary,
      }}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.heading,
            {
              color: colors.text,
            },
          ]}
        >
          Sooyaal
        </Text>

        <Text
          style={{
            ...styles.subheading,
            color: colors.text,
          }}
        >
          {t("welcome-message")}
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <Button
          variant="contained"
          onPress={() => navigation.navigate("Login")}
        >
          {t("form.btn.login")}
        </Button>
        <Button variant="text" onPress={() => navigation.navigate("Register")}>
          {t("form.btn.register")}
        </Button>
      </View>

      <Button
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        variant="text"
        onPress={() => Linking.openURL("https://abdizamedmo.netlify.app")}
      >
        About me &rarr;
      </Button>
    </SafeAreaView>
  );
}
