import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { Entypo } from "@expo/vector-icons";
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-left" size={24} color={colors.text} />
        </TouchableOpacity>
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
