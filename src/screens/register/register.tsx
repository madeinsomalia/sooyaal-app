import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { BackIcon, Button } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import { registerValidationSchema } from "@/validations/auth";

const initialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const { colors, dark } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon navigation={navigation} />,
    });
  }, [navigation, dark]);

  return (
    <SafeAreaView
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
        validationSchema={registerValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <View>
                <TextInput
                  keyboardType="default"
                  autoComplete="name"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Full Name"
                  style={{
                    ...styles.input,
                    color: colors.text,
                    backgroundColor: colors.primary,
                    borderColor: colors.text,

                    ...(errors.name && touched.name ? styles.inputError : {}),
                  }}
                  placeholderTextColor={colors.text}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={colors.text}
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 15,
                  }}
                />
              </View>
              <View>
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
              </View>
              <View>
                <TextInput
                  keyboardType="phone-pad"
                  autoComplete="tel"
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Phone Number"
                  style={{
                    ...styles.input,
                    color: colors.text,
                    backgroundColor: colors.primary,
                    borderColor: colors.text,

                    ...(errors.phone && touched.phone ? styles.inputError : {}),
                  }}
                  placeholderTextColor={colors.text}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                <Ionicons
                  name="call-outline"
                  size={20}
                  color={colors.text}
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 15,
                  }}
                />
              </View>
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

              <View>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="password"
                  autoCorrect={false}
                  // keyboardType="visible-password"
                  placeholder="Confirm Password"
                  style={{
                    ...styles.input,
                    color: colors.text,
                    backgroundColor: colors.primary,
                    borderColor: colors.text,

                    ...(errors.confirmPassword && touched.confirmPassword
                      ? styles.inputError
                      : {}),
                  }}
                  placeholderTextColor={colors.text}
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
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

            <View
              style={{
                marginHorizontal: 20,
                opacity: 0.8,
              }}
            >
              <Button variant="contained" onPress={handleSubmit}>
                Register
              </Button>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: -50,
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
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    borderWidth: 0.7,
    opacity: 0.4,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingLeft: 40,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 0.7,
  },
});
