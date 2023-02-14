import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/theme/ThemeProvider";
import { BackIcon, TextField } from "@/components";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "@/constants/fonts";

export default function ChangePasswordScreen() {
  const navigation = useNavigation();
  const { dark, colors } = useTheme();

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon navigation={navigation} />,
    });
  }, [dark, navigation]);

  const { t } = useTranslation();
  const [showNewPasswordField, setShowNewPasswordField] = React.useState(false);

  const handleOldPassword = () => {
    console.log("old password");
    setShowNewPasswordField(true);
  };
  const [showInfo, setShowInfo] = React.useState(false);

  const popupAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(popupAnim, {
      toValue: showInfo ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showInfo]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          marginBottom: 20,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 20,
          }}
          onPress={() => setShowInfo(!showInfo)}
        >
          Show Steps{" "}
          <Ionicons
            name={showInfo ? "chevron-up" : "chevron-down"}
            size={20}
            color={colors.text}
          />
        </Text>
      </TouchableOpacity>
      {showInfo && (
        <Animated.View
          style={{
            width: "100%",
            backgroundColor: colors.cardBg,
            paddingVertical: 20,
            marginBottom: 20,
            opacity: popupAnim,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 20,

              marginHorizontal: 15,
              fontFamily: fonts.primary.thin,
            }}
          >
            {t("change-password-message")}
          </Text>
        </Animated.View>
      )}

      <TextField
        label={t("form.label.oldPassword")}
        type="password"
        placeholder={t("form.input.oldPassword") + " *"}
        onSubmitEditing={handleOldPassword}
      />

      {showNewPasswordField && (
        <>
          <TextField
            label={t("form.label.newPassword")}
            type="password"
            placeholder={t("form.input.newPassword") + " *"}
            onChangeText={(text) => {
              console.log(text);
            }}
          />

          <TextField
            label={t("form.label.confirmPassword")}
            type="password"
            placeholder={t("form.input.confirmPassword") + " *"}
            onChangeText={(text) => {
              console.log(text);
            }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    borderWidth: 0.7,
    opacity: 0.4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  inputError: {
    borderColor: "red",
    borderWidth: 0.7,
  },
});
