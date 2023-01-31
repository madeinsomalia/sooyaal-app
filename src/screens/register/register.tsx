import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { Button } from "@/components";
import { Entypo } from "@expo/vector-icons";

export default function RegisterScreen({ navigation }: { navigation: any }) {
  const { colors, dark } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: 10,
            backgroundColor: dark ? colors.cardBg : colors.secondary,
            borderRadius: 10,
          }}
        >
          <Entypo name="chevron-thin-left" size={24} color={colors.text} />
          {/* <Ionicons name="chevron-back-outline" color={colors.text} size={24} /> */}
        </TouchableOpacity>
      ),
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

      <View style={styles.inputContainer}>
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
            borderBottomColor: colors.text,
          }}
          placeholderTextColor={colors.text}
        />
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
          keyboardType="phone-pad"
          autoComplete="tel"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Phone Number"
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
            borderBottomColor: colors.text,
          }}
          placeholderTextColor={colors.text}
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <Button variant="contained">Register</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,

    marginTop: -40,
  },

  heading: {
    fontFamily: fonts.primary.extraBold,
    fontSize: 50,
    marginBottom: 25,
    letterSpacing: 1,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    borderBottomWidth: 0.4,
  },
});
