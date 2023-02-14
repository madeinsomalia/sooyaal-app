import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Post } from "@/interfaces/post";
import { formatRelativeTime } from "@/utils/formatDate";

export default function PostsList({ post }: { post: Post }) {
  const navigation: any = useNavigation();
  const { colors, dark } = useTheme();
  const [showModal, setShowModal] = React.useState(false);

  if (showModal) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View
          // style={styles.centeredView}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.secondary,
          }}
        >
          <View
            // style={styles.modalView}
            style={{
              flexDirection: "row",
            }}
          >
            {/* radio buttons with private or public */}
            <TouchableOpacity
              style={{
                backgroundColor: colors.cardBg,
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: !dark ? colors.primary : "#030303",
                flexDirection: "row",
              }}
              onPress={() => setShowModal(false)}
            >
              <Ionicons
                name="radio-button-on-outline"
                size={24}
                color={colors.text}
              />
              <Text style={{ color: colors.text, marginLeft: 5 }}>Public</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: 20,
                backgroundColor: colors.cardBg,
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: !dark ? colors.primary : "#030303",
                flexDirection: "row",
              }}
              onPress={() => setShowModal(false)}
            >
              <Ionicons
                name="radio-button-off-outline"
                size={24}
                color={colors.text}
              />
              <Text style={{ color: colors.text, marginLeft: 5 }}>Private</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  const count = "10000";
  const { id, title, content, author, createdAt, photoURL } = post;
  return (
    <>
      <View
        style={{
          ...styles.card,
          backgroundColor: colors.cardBg,
          shadowColor: !dark ? colors.primary : "#030303",
        }}
      >
        <View style={styles.author}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                userId: author?.id,
              })
            }
            style={styles.authorInfo}
          >
            <Image
              source={{ uri: author?.photoURL || "" }}
              style={styles.avatar}
            />
            <View
              style={{
                flexDirection: "column",
                opacity: 0.8,
              }}
            >
              <Text style={{ color: colors.text, fontSize: 15, marginLeft: 5 }}>
                {author?.name || "Anonymous"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 5,
                }}
              >
                <Ionicons name="time-outline" size={15} color={colors.text} />
                <Text
                  style={{ color: colors.text, fontSize: 15, marginLeft: 5 }}
                >
                  {formatRelativeTime(new Date(createdAt))}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign
              name="ellipsis1"
              size={24}
              color={colors.text}
              onPress={() => setShowModal(true)}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={{ color: colors.text, fontSize: 20, marginTop: 10 }}>
            {title}.
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize: 15,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            {content.length > 140
              ? content.slice(0, 140) + "  Read more..."
              : content}
          </Text>
        </View>

        {photoURL.length > 0 && (
          <Image source={{ uri: photoURL[0] }} style={styles.image} />
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="heart-outline"
                size={24}
                color={colors.text}
                style={{
                  marginRight: 2,
                }}
              />
              <Text style={{ color: colors.text }}>
                {count.length > 3
                  ? count.slice(0, count.length - 3) + "k"
                  : count}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <AntDesign
                name="like2"
                size={24}
                color={colors.text}
                style={{
                  marginRight: 2,
                }}
              />
              <Text style={{ color: colors.text }}>
                {count.length > 3
                  ? count.slice(0, count.length - 3) + "k"
                  : count}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <AntDesign
                name="dislike2"
                size={24}
                color={colors.text}
                style={{
                  marginRight: 2,
                }}
              />
              <Text style={{ color: colors.text }}>
                {count.length > 3
                  ? count.slice(0, count.length - 3) + "k"
                  : count}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {
              // @ts-ignore
              navigation.navigate("Post", {
                postId: post.id,
              } as any);
            }}
          >
            <Text style={{ color: colors.text }}>Read More</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginVertical: 0,
          backgroundColor: colors.secondary,
          height: 15,
        }}
      />
    </>
  );
}
