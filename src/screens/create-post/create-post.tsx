import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/theme/ThemeProvider";
// import { fonts } from "@/constants/fonts";
import { BackIcon, Button } from "@/components";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function CreatePostScreen() {
  const navigation = useNavigation();
  const { colors, dark } = useTheme();
  const [images, setImages] = useState<any[]>([]);
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
      headerLeft: () => <BackIcon navigation={navigation} />,
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
    console.debug(photo);
  };

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: colors.primary,
      }}
    >
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
                  color={colors.text}
                />
              ) : (
                <Ionicons name="camera-outline" size={24} color={colors.text} />
              )}

              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>

          {/* Take the photo in the camera */}
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              // backgroundColor: "#f0f0f0",
              borderRadius: 50,
              backgroundColor: dark ? colors.cardBg : colors.secondary,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,

              alignSelf: "center",
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
            >
              <Image
                source={{ uri: image.uri }}
                style={{ width: 120, height: 120 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: 500,
    // backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    // flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    color: "white",
    marginLeft: 5,
  },

  image: {
    width: "100%",
    height: 250,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },
});
