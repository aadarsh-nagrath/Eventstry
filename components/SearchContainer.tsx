import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SearchContainer = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.search}>Search</Text>
      <Image
        style={styles.iconOutlinedSearch}
        contentFit="cover"
        source={require("../assets/icon--outlined--search.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: -2,
    left: -2,
    borderRadius: Border.br_16xl_5,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 2,
    width: 415,
    height: 48,
    position: "absolute",
  },
  search: {
    top: 11,
    left: 24,
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.avenir,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  iconOutlinedSearch: {
    top: 10,
    left: 363,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 18,
    left: 515,
    width: 411,
    height: 44,
    position: "absolute",
  },
});

export default SearchContainer;
