import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SectionList,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { Entypo } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }: { navigation: any }) {
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
        ...styles.container,
        backgroundColor: colors.primary,
      }}
    >
      <View
        style={{
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.userContainer}
        >
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
