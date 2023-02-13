import ShowFullScreenImage from "@/components/ShowFullScreenImage";
import {
  CreatePostScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from "@/screens";
import { useTheme } from "@/theme/ThemeProvider";
import { Link } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fonts } from "@/constants/fonts";
import SinglePostScreen from "@/screens/single-post/single-post";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
          },

          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Link
                to={"/Settings"}
                style={{
                  marginRight: 10,
                }}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={colors.text}
                />
              </Link>
              {/* <ToggleMode /> */}
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },

          headerShadowVisible: false,
          headerBackTitle: "",

          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          // headerRight: () => <ToggleMode />,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerBackVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackTitle: "",

          // headerRight: () => <ToggleMode />,
        }}
        // initialParams={{
        //   userId: "1",
        // }}
      />

      <Stack.Screen
        name="FullScreenImage"
        component={ShowFullScreenImage}
        options={{
          // headerShown: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          // headerShown: false,
          headerTitle: "Create a Post",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          // headerShadowVisible: false,

          // headerRight: () => <ToggleMode />,
        }}
        initialParams={{
          step: 1,
        }}
      />

      {/* <Stack.Screen
        name="CreatePostContent"
        component={CreatePostScreen}
        options={{
          // headerShown: false,
          headerTitle: "Create a Post",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerTitleAlign: "center",
          // headerShadowVisible: false,

          // headerRight: () => <ToggleMode />,
        }}
        initialParams={{
          step: 2,
        }}
      /> */}

      <Stack.Screen
        name="Post"
        component={SinglePostScreen}
        options={{
          // headerShown: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
          },

          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
