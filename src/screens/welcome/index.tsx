import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";
import { Button } from "@/components";

export default function WelcomeScreen() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
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
          style={[
            styles.subheading,
            {
              color: colors.text,
            },
          ]}
        >
          Sooyaal is a social media blogs app that allows you to share your
          ideas with the world. You can also read blogs from other people.
        </Text>
      </View>

      <Button variant="contained">Sign in</Button>
      <Button variant="text">Sign up</Button>
    </SafeAreaView>
  );
}
