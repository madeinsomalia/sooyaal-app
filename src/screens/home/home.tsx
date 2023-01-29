import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import PostsList from "./posts-list";

export default function home({ navigation }: any) {
  const { colors, dark } = useTheme();
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: !dark ? "#f2f2f2" : colors.primary,
      }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={{
              uri: "https://www.moveo.it/wp-content/uploads/2018/10/empty-avatar.png",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="settings-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* card with posts using ScrollView */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          padding: 0,
        }}
        showsVerticalScrollIndicator
      >
        {[...Array(10)].map((_, i) => {
          return <PostsList key={i} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
