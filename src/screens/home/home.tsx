import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";
import PostsList from "./posts-list";

export default function HomeScreen({ navigation }: any) {
  const { colors, dark } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.push("Profile")}
          style={{
            marginLeft: 10,
          }}
        >
          <Image
            source={{
              uri:
                "https://www.github.com/aaqyaar.png" ||
                "https://www.moveo.it/wp-content/uploads/2018/10/empty-avatar.png",
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      ),
    });
  }, [dark, navigation]);

  // const [clicked, setClicked] = React.useState(false);
  // const [searchPhrase, setSearchPhrase] = React.useState("");

  //
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: colors.primary,
      }}
    >
      {/* card with posts using ScrollView */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          padding: 0,
          margin: 0,
        }}
        showsVerticalScrollIndicator
      >
        <View
          style={{
            backgroundColor: colors.secondary,
            height: 15,
          }}
        />
        {[...Array(10)].map((_, i) => {
          return <PostsList key={i} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
