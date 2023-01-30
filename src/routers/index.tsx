// import { fonts } from "@/constants/fonts";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
            // headerBackTitleVisible: false,
            // title: "Sign in",
            // headerStyle: {
            //   backgroundColor: colors.primary,
            // },
            // headerTitleStyle: {
            //   color: colors.text,
            //   fontFamily: fonts.primary.medium,
            // },
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            // headerShown: true,
            headerTitle: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.text,
            },
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
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
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleStyle: {
              color: colors.text,
            },
            headerShadowVisible: false,
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
