import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
// import { fonts } from "@/constants/fonts";
import { BackIcon, Button } from "@/components";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import { Camera, CameraType } from "expo-camera";
import { Ionicons, Entypo } from "@expo/vector-icons";
import styles from "./styles";

let content:
  | string
  | number
  | boolean
  | React.ReactFragment
  | JSX.Element
  | null
  | undefined = null;

export default function CreatePostScreen({ route }: { route: any }) {
  const navigation: any = useNavigation();
  const { colors, dark } = useTheme();
  const [images, setImages] = useState<any[]>([]);
  const [image, setImage] = useState([]);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const ref = useRef<any>(null);

  // read all images inside your phone
  const findImages = async () => {
    // request permission to access the phone storage
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library");
      return;
    }
    // get all images from the phone
    const images = await MediaLibrary.getAssetsAsync({
      mediaType: "photo",
    });
    setImages(images.assets);
  };
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            route.params.step != 2
              ? navigation.goBack()
              : navigation.setParams({ step: 1 });
          }}
          style={{
            padding: 10,
            backgroundColor: dark ? colors.cardBg : colors.secondary,
            borderRadius: 10,
          }}
        >
          <Entypo name="chevron-thin-left" size={24} color={colors.text} />
        </TouchableOpacity>
      ),

      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 10,
            backgroundColor: dark ? colors.cardBg : colors.secondary,
            borderRadius: 10,
          }}
        >
          {/* save tick icon */}

          <Entypo name="check" size={24} color={colors.text} />
        </TouchableOpacity>
      ),
    });
    findImages();
  }, [dark, navigation]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 20,
          }}
        >
          No access to camera
        </Text>
        <Button variant="contained" onPress={requestPermission}>
          Request permission
        </Button>
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync();
    photo.uri = photo.uri.replace("file://", "");
    navigation.setParams({ step: 2, photo: photo.uri });
  };

  const clickedPhoto = (photo: string) => {
    navigation.navigate("CreatePost", {
      step: 2,
      photo,
    });
  };

  if (route.params.step != 2) {
    content = (
      <ScrollView
        style={{
          // marginHorizontal: 20,
          marginTop: 20,
        }}
        horizontal={false}
        showsVerticalScrollIndicator
      >
        <Camera
          style={{
            ...styles.camera,
            backgroundColor: dark ? colors.cardBg : colors.secondary,
          }}
          ref={ref}
          type={type}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              {type === CameraType.back ? (
                <Ionicons
                  name="camera-reverse-outline"
                  size={24}
                  color={colors.primary}
                />
              ) : (
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color={colors.primary}
                />
              )}
            </TouchableOpacity>
          </View>

          {/* Take the photo in the camera */}
          <TouchableOpacity
            style={{
              ...styles.takePhoto,
              backgroundColor: dark ? colors.cardBg : colors.secondary,
            }}
            onPress={_takePhoto}
          >
            <Ionicons name="camera-outline" size={30} color={colors.text} />
          </TouchableOpacity>
        </Camera>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {images.map((image, i) => (
            <TouchableOpacity
              key={i}
              style={{
                width: 120,
                height: 120,
                backgroundColor: "#f0f0f0",
                marginTop: 10,
                marginRight: 10,
              }}
              onPress={() => clickedPhoto(image.uri)}
            >
              <Image
                source={{ uri: image.uri }}
                style={{ width: 120, height: 120 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }

  if (route.params.step == 2) {
    content = (
      <View>
        <Image source={{ uri: route.params.photo }} style={styles.image} />
        <TextInput
          autoCorrect={false}
          style={{
            ...styles.textInput,
            color: colors.text,
            opacity: 0.6,
          }}
          placeholder="Write a post title..."
          placeholderTextColor={colors.text}
          maxLength={100}
        />

        <Text
          style={{
            color: colors.text,
            textAlign: "right",
            opacity: 0.6,
            width: "98%",
          }}
        >
          Max. 100
        </Text>

        <TextInput
          style={{
            ...styles.textInput,
            backgroundColor: dark ? colors.cardBg : colors.secondary,
            color: colors.text,
            height: 100,
            opacity: 0.6,
          }}
          multiline
          placeholder="Write a post description..."
          placeholderTextColor={colors.text}
        />
        <Text
          style={{
            color: colors.text,
            textAlign: "right",
            opacity: 0.6,
            width: "98%",
          }}
        >
          Max. 500
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: colors.primary,
      }}
    >
      {content}
    </View>
  );
}
