import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { fonts } from "@/constants/fonts";
import { LoginScreen, RegisterScreen, WelcomeScreen } from "@/screens";
import { useTheme } from "@/theme/ThemeProvider";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const { colors } = useTheme();
  return (
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
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },
          headerShadowVisible: false,

          // headerRight: () => <ToggleMode />,
        }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          // headerShown: true,
          headerTitle: "Sign up",
          headerShadowVisible: false,
          headerTitleAlign: "center",

          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
            fontFamily: fonts.primary.regular,
          },

          // headerRight: () => <ToggleMode />,
        }}
      />
    </Stack.Navigator>
  );
}
