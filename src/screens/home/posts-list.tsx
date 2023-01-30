import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeProvider";
import { styles } from "./styles";

export default function PostsList() {
  const { colors, dark } = useTheme();

  return (
    <>
      <View
        style={{
          ...styles.card,
          backgroundColor: colors.primary,
          shadowColor: !dark ? colors.primary : "#030303",
        }}
      >
        <View style={styles.content}>
          <Text style={{ color: colors.text, fontSize: 15 }}>
            {"Abdi Zamed Mohamed"}
          </Text>

          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://www.traveltourxp.com/wp-content/uploads/2016/09/Attractions-Of-Somalia.jpg",
          }}
          style={styles.image}
        />
        <Text style={{ color: colors.text, fontSize: 20 }}>Post</Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 15,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod,
          quia, voluptas, voluptate quas voluptates quibusdam voluptatum quae
          quidem quos nesciunt. Quisquam, quae. Quisquam quae, quod quibusdam
          quia quos voluptas.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Ionicons
                name="heart-outline"
                size={24}
                color={colors.text}
                style={{
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign
                name="like2"
                size={24}
                color={colors.text}
                style={{
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="dislike2"
                size={24}
                color={colors.text}
                style={{
                  marginRight: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
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
          height: 10,
          backgroundColor: !dark ? "#f2f2f2" : colors.primary,
        }}
      />
    </>
  );
}
