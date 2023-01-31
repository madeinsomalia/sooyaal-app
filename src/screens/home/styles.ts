import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  scrollView: {
    // paddingHorizontal: 25,
    marginTop: Platform.OS === "android" ? -40 : 10,
  },

  author: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,

    paddingHorizontal: 10,
  },
  content: {
    paddingHorizontal: 10,
  },
  card: {
    width: "100%",
    height: "auto",
  },

  image: {
    height: 200,
    width: undefined,
    // borderRadius: 2,
    marginBottom: 10,
    flex: 1,
    resizeMode: "cover",
  },
});
