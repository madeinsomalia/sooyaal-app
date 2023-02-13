import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { BackIcon } from "@/components";
import { useAppSelector } from "@/app/store";

export default function SinglePostScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { colors, dark } = useTheme();
  const { posts } = useAppSelector((state) => state.post);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackIcon navigation={navigation} />,
    });
  }, [navigation, dark]);

  const post = posts.find((post) => post.id == route.params.postId);

  const openFullScreenImage = () => {
    navigation.navigate("FullScreenImage", { image: post?.photoURL[0] });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      {/* // images carousel here */}
      {(post?.photoURL.length as number) > 0 && (
        <TouchableOpacity
          style={{
            height: 300,
            marginVertical: 20,
            backgroundColor: colors.cardBg,
          }}
          onPress={() => openFullScreenImage()}
        >
          <Image source={{ uri: post?.photoURL[0] }} style={{ flex: 1 }} />
        </TouchableOpacity>
      )}

      {/* // post content */}
      <View
        style={{
          marginTop: (post?.photoURL.length as number) > 0 ? 0 : 50,
          padding: 10,
          backgroundColor: colors.cardBg,
          flex: 1,
          // height: "8/0%",
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 20,
            fontFamily: fonts.primary.bold,
          }}
        >
          {post?.title}
        </Text>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              fontFamily: fonts.primary.medium,
            }}
          >
            {/* {post?.likes} likes */}
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              fontFamily: fonts.primary.medium,
              marginLeft: 10,
            }}
          >
            {/* {post?.comments} comments */}
          </Text>

          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              fontFamily: fonts.primary.medium,
              marginLeft: 10,
            }}
          >
            {/* {post?.shares} shares */}
          </Text>
        </View>
        {/* spacer */}
        <View style={{ height: 20 }} />
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            fontFamily: fonts.primary.regular,
          }}
        >
          {post?.content}
        </Text>
      </View>

      {/* // post actions */}

      {/* if there another images of this post, show as agrid */}
      {(post?.photoURL.length as any) > 1 && (
        <View
          style={{
            paddingLeft: 10,
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontFamily: fonts.primary.bold,
              marginBottom: 10,
            }}
          >
            More images.....
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {post?.photoURL.slice(1).map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{
                  width: "25%",
                  height: 110,
                  marginBottom: 10,
                  marginLeft: index % 3 == 0 ? 0 : 10,
                  borderRadius: 5,
                }}
              />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
