import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SectionList,
} from "react-native";
import React from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";

export default function SettingsScreen() {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: colors.primary,
      }}
    >
      <View
        style={{
          paddingTop: Platform.OS === "android" ? 90 : 40,
        }}
      >
        <TouchableOpacity style={styles.userContainer}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/98351506?v=4",
            }}
            style={styles.avatar}
          />
          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              fontFamily: fonts.primary.regular,
              marginStart: 10,
            }}
          >
            {"Abdi Zamed Mohamed"}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <SectionList
          style={{
            ...styles.sectionList,
            backgroundColor: colors.primary,
          }}
          sections={[
            {
              data: [
                "Favourites",
                "Change Password",
                "Notifications",
                "Privacy",
                "Security",
                "Data and storage",
                "About",
                "Help",
              ],
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 10 }}>
              <Text style={{ color: colors.text }}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    height: 60,
    width: "100%",
    marginVertical: 10,

    alignItems: "center",
    flexDirection: "row",
    paddingStart: 15,
    borderRadius: 0,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  sectionList: {
    width: "100%",
    marginVertical: 10,
    paddingStart: 10,
    borderRadius: 0,
  },
});
