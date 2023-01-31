import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Platform } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useTheme } from "@/theme/ThemeProvider";
import Button from "./Button";

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}: {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (searchPhrase: string) => void;
  setClicked: (clicked: boolean) => void;
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={[
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked,
          {
            backgroundColor: colors.primary,
            borderColor: colors.text,
            borderWidth: Platform.OS === "ios" ? 0.3 : 0.1,
          },
        ]}
      >
        {/* backgroundColor: colors.primary, */}
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color={colors.text}
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={{
            ...styles.input,
            color: colors.text,
          }}
          placeholder="Search"
          placeholderTextColor={colors.text}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color={colors.text}
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          {/* <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button> */}
          <Button
            style={{
              // backgroundColor: colors.primary,
              marginLeft: 10,
            }}
            variant="text"
            onPress={() => setClicked(false)}
          >
            Cancel
          </Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    marginHorizontal: 10,

    marginBottom: Platform.OS === "ios" ? 0 : 50,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",

    borderRadius: 0,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",

    borderRadius: 0,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
