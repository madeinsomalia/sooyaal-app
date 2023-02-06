import { useAppSelector } from "@/app/store";
import AuthNavigator from "@/routers/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";

export default function AppNavigator() {
  // const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {/* {isAuthenticated && user != null ? <HomeNavigator /> : <AuthNavigator />} */}
      <HomeNavigator />
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
}
