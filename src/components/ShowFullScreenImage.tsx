import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";

// let deviceH = Dimensions.get("window").height;
// let deviceW = Dimensions.get("window").width;

export default function ShowFullScreenImage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { colors, dark } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableHighlight
          style={{
            marginLeft: 20,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 18,
              fontFamily: fonts.primary.bold,
            }}
          >
            Back
          </Text>
        </TouchableHighlight>
      ),
    });
  }, [dark, navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={{
          uri: route.params.image,
        }}
        style={{
          width: "100%",
          height: "90%",
          zIndex: 100,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
