import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { fonts } from "@/constants/fonts";
import { BackIcon, Button } from "@/components";
import PostsList from "../home/posts-list";

const fakeUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@gmail.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "janedoe",
    email: "jane@gmail.com",
    phone: "1234567890",
  },
];

const fakeProfileUsers = [
  {
    userId: 1,
    website: "https://johndoe.com",
    photoURL: "https://avatars.githubusercontent.com/u/96237528?v=4",
    bio: "I am John Doe",
    address: {
      street: "123 Main St",
      city: "New York",
      zipcode: "12345",
    },
    dateOfBirth: "1990-01-01",
    education: [
      {
        school: "University of California",
        degree: "Bachelors",
        fieldOfStudy: "Computer Science",
        from: "2010-01-01",
        to: "2014-01-01",
      },
      {
        school: "University of California",
        degree: "Masters",
        fieldOfStudy: "Computer Science",
        from: "2014-01-01",
        to: "2016-01-01",
      },
    ],
    posts: [
      {
        id: 1,
        title: "Post 1",
        image: "https://picsum.photos/200/300",
        content: "Post 1 content content, content, content, content .content",
        likes: 10,
        comments: 5,
        shares: 2,
        createdAt: "2020-01-01",
      },
      {
        id: 2,
        title: "Post 2",
        image: "https://picsum.photos/200/300",

        content: "Post 2 content content, content, content, content .content",
        likes: 10,
        comments: 5,
        shares: 2,
        createdAt: "2020-01-01",
      },
    ],
  },
  {
    userId: 2,
    website: "https://janedoe.com",
    photoURL: "https://avatars.githubusercontent.com/u/98351506?v=4",
    bio: "I am Jane Doe",
    address: {
      street: "123 Main St",
      city: "New York",
      zipcode: "12345",
    },
    dateOfBirth: "1990-01-01",
    education: [
      {
        school: "University of California",
        degree: "Bachelors",
        fieldOfStudy: "Computer Science",
        from: "2010-01-01",
        to: "2014-01-01",
      },
      {
        school: "University of California",
        degree: "Masters",
        fieldOfStudy: "Computer Science",
        from: "2014-01-01",
        to: "2016-01-01",
      },
    ],
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Post 1 content content, content, content, content .content",
        likes: 10,
        comments: 5,
        shares: 2,
        createdAt: "2020-01-01",
      },
      {
        id: 2,
        title: "Post 2",
        content: "Post 2 content content, content, content, content .content",
        likes: 10,
        comments: 5,
        shares: 2,
        createdAt: "2020-01-01",
      },
    ],
  },
];

export default function ProfileScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { colors, dark } = useTheme();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon navigation={navigation} />,
    });
  }, [dark, navigation]);
  // search for the user
  const user = fakeUsers.find((user) => user.id == route.params.userId);
  // search for the profile user
  const profileUser = fakeProfileUsers.find(
    (profileUser) => profileUser.userId === user?.id
  );

  const userInfo = {
    ...user,
    ...profileUser,
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
    profileUser?.photoURL &&
      navigation.navigate("FullScreenImage", {
        image: profileUser?.photoURL as string,
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
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
              source={{ uri: profileUser?.photoURL }}
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
        {profileUser?.posts &&
          profileUser?.posts.map((item: any, i: number) => {
            return <PostsList id={i + 1} key={item.id} />;
          })}
      </ScrollView>
    </View>
  );
}
