import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { Button } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function CreatePostScreen() {
  const navigation = useNavigation();
  const { colors, dark } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            padding: 10,
            backgroundColor: colors.cardBg,
            borderRadius: 10,
          }}
        >
          <Entypo name="chevron-thin-left" size={24} color={colors.text} />
          {/* <Ionicons name="chevron-back-outline" color={colors.text} size={24} /> */}
        </TouchableOpacity>
      ),
    });
  }, [dark, navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: colors.primary,
      }}
    >
      <ScrollView
        style={{
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 20,
            fontFamily: fonts.primary.medium,
          }}
        >
          Create Post
        </Text>

        <View
          style={{
            marginTop: 20,
            backgroundColor: colors.primary,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              marginBottom: 5,
            }}
          >
            Title
          </Text>
          <TextInput
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              borderRadius: 5,
              padding: 10,
              borderColor: colors.text,
              borderWidth: 0.17,
              marginBottom: 10,
            }}
            placeholder="Title"
            placeholderTextColor={colors.text}
          />

          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              marginBottom: 5,
            }}
          >
            Content
          </Text>
          <TextInput
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              borderRadius: 5,
              padding: 10,
              borderColor: colors.text,
              borderWidth: 0.17,
              marginBottom: 10,

              height: 150,
              justifyContent: "flex-start",
            }}
            numberOfLines={10}
            multiline={true}
          />

          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              marginBottom: 5,
            }}
          >
            Title
          </Text>
          <TextInput
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              borderRadius: 5,
              padding: 10,
              borderColor: colors.text,
              borderWidth: 0.17,
            }}
            placeholder="Title"
            placeholderTextColor={colors.text}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: colors.primary,
          }}
        >
          <Button
            variant="contained"
            onPress={() => console.log("Create Post")}
          >
            Save
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
