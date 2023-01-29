import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { Button } from "@/components";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
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
            borderBottomColor: colors.text,
          }}
          placeholderTextColor={colors.text}
        />
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
            borderBottomColor: colors.text,
          }}
          placeholderTextColor={colors.text}
          secureTextEntry={true}
        />
      </View>

      <View>
        <Button variant="contained">Login</Button>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          width: "100%",
          // alignItems: "center",
          paddingHorizontal: 10,
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
  },
  heading: {
    fontFamily: fonts.primary.extraBold,
    fontSize: 50,
    marginBottom: 20,
    letterSpacing: 1,
    textAlign: "center",
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
    borderBottomWidth: 0.6,
  },
});
