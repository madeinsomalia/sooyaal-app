// import { fonts } from "@/constants/fonts";
import { ToggleMode } from "@/components";
import ShowFullScreenImage from "@/components/ShowFullScreenImage";
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
  SettingsScreen,
  WelcomeScreen,
} from "@/screens";
import { useTheme } from "@/theme/ThemeProvider";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/screens/home/styles";
import { fonts } from "@/constants/fonts";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerBackVisible: false,
            title: "Sign in",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.text,
              fontFamily: fonts.primary.regular,
            },
            headerShadowVisible: false,

            headerRight: () => <ToggleMode />,
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            // headerShown: true,
            headerTitle: "Sign up",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.text,
              fontFamily: fonts.primary.regular,
            },

            headerRight: () => <ToggleMode />,
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
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
                <ToggleMode />
              </View>
            ),
            headerLeft: () => (
              <Link
                // to={"Profile"}
                to={"/Profile"}
                // to={{ screen: "/Profile", params: { userId: "1" } }}
                style={{ marginLeft: 10 }}
              >
                <Image
                  source={{
                    uri: "https://www.moveo.it/wp-content/uploads/2018/10/empty-avatar.png",
                  }}
                  style={styles.avatar}
                />
              </Link>
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

            headerTitleStyle: {
              color: colors.text,
              fontFamily: fonts.primary.regular,
            },

            headerRight: () => <ToggleMode />,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.primary,
            },

            headerTitleStyle: {
              color: colors.text,
              fontFamily: fonts.primary.regular,
            },
            headerShadowVisible: false,
            headerBackTitle: "",
            headerRight: () => <ToggleMode />,
          }}
          initialParams={{
            userId: "1",
          }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
