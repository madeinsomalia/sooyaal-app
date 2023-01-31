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

const posts = [
  {
    id: 1,
    title: "What is Mogadishu? the capital of Somalia",
    content:
      "Mogadishu ( Arabic: مقديشو, locally known as Xamar or Hamar, is the capital and most populous city of Somalia. The city has served as an important port connecting traders across the Indian Ocean for millennia, and has an estimated urban population of 4,249,083 (2023).[8] Mogadishu is located in the coastal Banadir region on the Indian Ocean, which unlike other Somali regions, is considered a municipality rather than a maamul goboleed (federal state).[9] Mogadishu has a long history, which ranges from the ancient period up until the present, serving as the capital of the Sultanate of Mogadishu in the 9th-13th century, which for many centuries controlled the Indian Ocean gold trade, and eventually came under the Ajuran Empire in the 13th century which was an important player in the medieval Silk Road maritime trade. Mogadishu enjoyed the height of its prosperity during the 14th and 15th centuries[10] and was during the early modern period considered the wealthiest city on the East African coast, as well as the center of a thriving textile industry.[11] In the 17th century, Mogadishu and parts of southern Somalia fell under the Hiraab Imamate and in the 19th century came under the Geledi Sultanate's sphere of influence. In 1894 the Hiraab chiefs on behalf of Mogadishu had signed a treaty of peace, friendship and protection with Filonardi of the Italian Benadir Company.[12][13][14] The onset of Italian colonialism occurred in stages, with Italian treaties signed in the 1880s followed by economic engagement between Somali clans and the Italian Benadir Company and then direct governance by the Italian government after 1906, British Military Administration of Somalia after World War Two and the UN Italian Trust Territory in the 1950s. This was followed by independence in 1960, the Hantiwadaag (socialist) era during Siad Barre's presidency (1969–1991)",
    images: [
      "https://www.traveltourxp.com/wp-content/uploads/2016/09/Attractions-Of-Somalia.jpg",
      "https://www.traveltourxp.com/wp-content/uploads/2016/09/Attractions-Of-Somalia.jpg",
    ],
    likes: 10,
    comments: 5,
    shares: 2,
    createdAt: "2020-01-01",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Post 2 content content, content, content, content .content",
    images: [
      "https://www.traveltourxp.com/wp-content/uploads/2016/09/Attractions-Of-Somalia.jpg",
      "https://www.traveltourxp.com/wp-content/uploads/2016/09/Attractions-Of-Somalia.jpg",
    ],
    likes: 10,
    comments: 5,
    shares: 2,
    createdAt: "2020-01-01",
  },
];

export default function SinglePostScreen({
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
  }, [navigation, dark]);

  const post = posts.find((post) => post.id == route.params.postId);

  const openFullScreenImage = () => {
    navigation.navigate("FullScreenImage", { image: post?.images[0] });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      {/* // images carousel here */}
      <TouchableOpacity
        style={{
          height: 300,
          marginVertical: 20,
          backgroundColor: colors.cardBg,
        }}
        onPress={() => openFullScreenImage()}
      >
        <Image source={{ uri: post?.images[0] }} style={{ flex: 1 }} />
      </TouchableOpacity>

      {/* // post content */}
      <View
        style={{
          padding: 10,
          backgroundColor: colors.cardBg,
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
            {post?.likes} likes
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              fontFamily: fonts.primary.medium,
              marginLeft: 10,
            }}
          >
            {post?.comments} comments
          </Text>

          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              fontFamily: fonts.primary.medium,
              marginLeft: 10,
            }}
          >
            {post?.shares} shares
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
      {(post?.images.length as any) > 1 && (
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
            {post?.images.slice(1).map((image, index) => (
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
