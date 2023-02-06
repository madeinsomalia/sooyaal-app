import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { Button } from "@/components";
import { Formik } from "formik";
import { validationSchema } from "@/validations/auth";
import { Ionicons } from "@expo/vector-icons";
import { login } from "@/features/auth/auth.api";
import { useAppDispatch } from "@/app/store";
import { Toast } from "react-native-toast-message/lib/src/Toast";

interface LoginState {
  email: string;
  password: string;
}

const initialState: LoginState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: LoginState) => {
    navigation.navigate("Home");
    setLoading(true);
    const res = await dispatch(login(values));
    if (res.type !== "auth/login/fulfilled") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: res.payload,
        visibilityTime: 4000,
        autoHide: true,
        // topOffset: 30,
        position: "bottom",
      });
    }
    setLoading(false);

    // () => navigation.navigate("Home")
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.primary,
      }}
    >
      <Text
        style={{
          ...styles.heading,
          color: colors.text,
        }}
      >
        Sooyaal
      </Text>

      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                keyboardType="email-address"
                autoComplete="email"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                style={{
                  ...styles.input,
                  color: colors.text,
                  backgroundColor: colors.primary,
                  borderColor: colors.text,
                  paddingLeft: 40,
                  ...(errors.email && touched.email ? styles.inputError : {}),
                }}
                placeholderTextColor={colors.text}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <Ionicons
                name="mail-outline"
                size={20}
                color={colors.text}
                style={{
                  position: "absolute",
                  left: 10,
                  top: 15,
                }}
              />
              <View>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="password"
                  autoCorrect={false}
                  // keyboardType="visible-password"
                  placeholder="Password"
                  style={{
                    ...styles.input,
                    color: colors.text,
                    backgroundColor: colors.primary,
                    borderColor: colors.text,
                    position: "relative",
                    paddingLeft: 40,
                    ...(errors.password && touched.password
                      ? styles.inputError
                      : {}),
                  }}
                  placeholderTextColor={colors.text}
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <Ionicons
                  name="key-outline"
                  size={20}
                  color={colors.text}
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 15,
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: 10,
                    // top: 10,
                    bottom: 28,
                  }}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Ionicons
                      name="eye-off-outline"
                      size={20}
                      color={colors.text}
                    />
                  ) : (
                    <Ionicons
                      name="eye-outline"
                      size={20}
                      color={colors.text}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Button
                style={{
                  opacity: 0.8,
                }}
                loading={loading}
                variant="contained"
                onPress={handleSubmit}
              >
                Login
              </Button>
            </View>
          </>
        )}
      </Formik>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          width: "100%",
          // alignItems: "center",
          paddingHorizontal: 10,
          opacity: 0.8,
        }}
      >
        <Button variant="text" onPress={() => navigation.navigate("Register")}>
          Sign up
        </Button>
        <Button
          variant="text"
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot Password ?
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: -40,
  },
  heading: {
    fontFamily: fonts.primary.extraBold,
    fontSize: 50,
    marginBottom: 25,
    letterSpacing: 1,
    textAlign: "center",
    opacity: 0.8,
  },
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
