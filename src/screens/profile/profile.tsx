import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { fonts } from "@/constants/fonts";
import { BackIcon, Button } from "@/components";
import useAuth from "@/hooks/useAuth";
import { useAppSelector } from "@/app/store";
import PostsList from "../home/posts-list";
import axios from "@/utils/axios";

const getUserByID = async (id: string) => {
  const res = await axios(`/users/${id}`);
  return res.data;
};

export default function ProfileScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { posts } = useAppSelector((state) => state.post);
  const { colors, dark } = useTheme();
  const { user } = useAuth();

  const [findedUser, setFindedUser] = React.useState<any>(null);

  const findOne = async () => {
    const loaded = await getUserByID(route.params.userId);
    setFindedUser(loaded?.data);
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon navigation={navigation} />,
    });
  }, [dark, navigation]);

  useEffect(() => {
    // abort controller to cancel request
    const abortController = new AbortController();

    if (route?.params?.userId === user?.id) {
      setFindedUser(user);
    } else {
      findOne();
    }
    return () => {
      abortController.abort();
    };
  }, [route?.params?.userId, user]);

  // if the authenticated is not the same as the user profile
  // then we will show the user profile
  // else we will show the authenticated user profile

  const userPosts = posts.filter((post) => post.authorId === findedUser?.id);

  const userInfo = {
    ...findedUser,
    posts: userPosts,
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (Platform.OS !== "web" && status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      //   setImage(result.assets[0].uri);
    }
  };

  const openFullScreenImage = () => {
    findedUser?.photoURL &&
      navigation.navigate("FullScreenImage", {
        image: findedUser?.photoURL as string,
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      {isNaN(findedUser) ? (
        <ScrollView style={{ marginTop: 10, backgroundColor: colors.primary }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              backgroundColor: dark ? colors.cardBg : colors.secondary,
              //   colors.primary
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.primary.regular,
                  fontSize: 18,
                  opacity: 0.4,
                }}
              >
                Add
              </Text>

              <Ionicons
                name="camera-outline"
                size={24}
                color={colors.text}
                style={{
                  marginLeft: 10,
                  opacity: 0.4,
                }}
              />
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.primary.regular,
                  fontSize: 18,
                  marginLeft: 10,
                  opacity: 0.4,
                }}
              >
                Cover photo
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              position: "absolute",
              top: 150,
              left: 10,

              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => openFullScreenImage()}
              style={{
                borderWidth: 3,
                borderColor: colors.primary,
                borderRadius: 90,
                padding: 0.5,
              }}
            >
              <Image
                source={{ uri: findedUser?.photoURL }}
                style={{
                  height: 120,
                  width: 120,
                  resizeMode: "cover",
                  backgroundColor: colors.primary,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                position: "absolute",
                // bottom: 0,
                top: 100,
                right: 5,
                backgroundColor: colors.primary,
                borderRadius: 50,
              }}
            >
              <Ionicons
                name="camera-outline"
                size={24}
                color={dark ? "#e5e7eb" : "#1f2937"}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 10,
              marginTop: 70,
            }}
          >
            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  color: colors.text,

                  fontFamily: fonts.primary.regular,
                  fontSize: 18,
                }}
              >
                {userInfo?.name}
              </Text>
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.primary.regular,
                  fontSize: 14,
                  opacity: 0.4,
                }}
              >
                {userInfo?.email}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary,
                padding: 10,
                borderRadius: 10,

                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Feather name="edit" size={15} color={colors.text} />
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.primary.regular,
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginBottom: 10,
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  fontFamily: fonts.primary.regular,
                  fontSize: 15,
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                Posts
              </Text>

              <Button
                variant="contained"
                style={{
                  // height: 35,
                  padding: 10,

                  borderRadius: 50,
                }}
                onPress={() => navigation.navigate("CreatePost")}
              >
                <Ionicons name="add-outline" size={20} color={colors.primary} />
              </Button>
            </View>

            <View
              style={{
                marginTop: 20,
                backgroundColor: colors.secondary,
                height: 15,
              }}
            />
          </View>
          {userInfo.posts &&
            userInfo.posts.map((item: any, i: number) => {
              return <PostsList post={item} key={item.id} />;
            })}
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={colors.text} />
        </View>
      )}
    </View>
  );
}
