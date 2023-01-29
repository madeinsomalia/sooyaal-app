import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";
import { Button } from "@/components";

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
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
          Sooyaal is a social media blogs app that allows you to share your
          ideas with the world. You can also read blogs from other people.
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
          Sign in
        </Button>
        <Button variant="text" onPress={() => navigation.navigate("Register")}>
          Sign up
        </Button>
      </View>
    </SafeAreaView>
  );
}
