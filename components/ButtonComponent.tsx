import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ButtonComponent = () => {
  return <View style={styles.groupChild} />;
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    marginLeft: -194,
    top: 0,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslateblue,
    width: 388,
    height: 62,
  },
});

export default ButtonComponent;
