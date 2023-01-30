import { Text, View, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

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
    photoURL: "https://avatars.githubusercontent.com/u/98351506?v=4",
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

    console.log(result);

    if (!result.canceled) {
      //   setImage(result.assets[0].uri);
    }
  };

  const openFullScreenImage = () => {
    navigation.navigate("FullScreenImage", {
      image: userInfo.photoURL,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <View
        style={{
          alignItems: "center",
          //   marginHorizontal: 20,
          backgroundColor: colors.primary,
          padding: 25,
          marginTop: 20,
          shadowColor: dark ? "#000" : "#d1d5db",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.41,
          shadowRadius: 92.11,

          elevation: 14,
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: colors.text,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => openFullScreenImage()}>
            {userInfo.photoURL ? (
              <Image
                source={{ uri: userInfo.photoURL }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 99,
                }}
              />
            ) : (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  color: colors.primary,
                }}
              >
                {userInfo?.name?.charAt(0)}
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              position: "absolute",
              bottom: -5,
              right: -15,
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
        <Text
          style={{
            fontSize: 25,
            color: colors.text,
            marginTop: 5,
          }}
        >
          {userInfo?.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: colors.text,
            marginTop: 0,
          }}
        >
          {userInfo?.bio}
        </Text>
      </View>
    </View>
  );
}
