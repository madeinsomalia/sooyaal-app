import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 25,
    marginBottom: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  scrollView: {
    height: "100%",
    width: "100%",

    paddingHorizontal: 25,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 5,
    marginBottom: 15,
  },
  card: {
    width: "100%",
    height: "auto",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,

    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  image: {
    height: 200,
    width: undefined,
    borderRadius: 2,
    marginBottom: 10,
    flex: 1,
    resizeMode: "cover",
  },
});
