import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import ButtonComponent from "./ButtonComponent";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.groupWrapper}>
      <View style={[styles.rectangleParent, styles.bookNowPosition]}>
        <ButtonComponent />
        <Text style={[styles.bookNow, styles.bookNowPosition]}>Book now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookNowPosition: {
    left: "50%",
    position: "absolute",
  },
  bookNow: {
    marginLeft: -47,
    top: "29.03%",
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
    color: Color.colorWhite,
    textAlign: "left",
  },
  rectangleParent: {
    marginLeft: -194,
    top: 381,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 388,
    height: 62,
  },
  groupWrapper: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSnow,
    borderStyle: "solid",
    borderColor: Color.colorPeachpuff,
    borderWidth: 1,
    width: 420,
    height: 480,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FrameComponent;
