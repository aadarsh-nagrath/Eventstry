import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LoginContainer = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleLayout}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 54,
    width: 150,
    position: "absolute",
  },
  signTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    left: 48,
    top: 16,
    position: "absolute",
  },
  rectangleLayout: {
    height: 54,
    width: 150,
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue,
    borderWidth: 1,
  },
  signIn: {
    color: Color.colorDarkslateblue,
  },
  groupItem: {
    backgroundColor: Color.colorDarkslateblue,
  },
  signUp: {
    color: Color.colorWhite,
  },
  rectangleGroup: {
    marginLeft: 28,
  },
  groupParent: {
    top: 13,
    left: 1042,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});

export default LoginContainer;
