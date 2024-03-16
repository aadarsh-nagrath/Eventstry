import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const FrameComponent1 = () => {
  return <View style={styles.child} />;
};

const styles = StyleSheet.create({
  child: {
    position: "absolute",
    top: 82,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 1440,
    height: 4039,
    overflow: "hidden",
  },
});

export default FrameComponent1;
