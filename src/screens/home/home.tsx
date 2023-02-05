import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";
import PostsList from "./posts-list";
import { Button } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import useAuth from "@/hooks/useAuth";

export default function HomeScreen({ navigation }: any) {
  const { colors, dark } = useTheme();
  const { user } = useAuth();

  const [refresh, setRefresh] = useState(false);

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
                user?.photoURL ||
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
  const pullMe = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };
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
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }
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
          return <PostsList id={i + 1} key={i} />;
        })}
      </ScrollView>

      {/* action button that navigates add post screen */}
      <Button
        variant="contained"
        style={{
          position: "absolute",
          bottom: 20,
          right: 15,
          zIndex: 100,
          borderRadius: 50,
          padding: 10,
        }}
        onPress={() => navigation.push("CreatePost")}
      >
        <Ionicons name="add" size={24} color={colors.primary} />
      </Button>
    </SafeAreaView>
  );
}
