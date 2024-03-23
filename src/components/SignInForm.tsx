import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { Input } from "@ui-kitten/components";
import { Dimensions } from "react-native";

const SignInForm = () => {
  return (
    <View style={styles.rectangleParent}>
    <View style={{ flexDirection: "row", alignItems: "center", display: "flex" }}>
      <View style={[styles.groupChild, styles.groupLayout1]} />
      <Image
        style={[styles.key3SvgrepoCom1Icon, {flex: 1, height: 25, width: 25, resizeMode: "contain"}]}
        contentFit="contain"
        source={require("../../assets/call192svgrepocom-3-1.png")}
      />
      <Input
        placeholder="Phone"
        style={[styles.inputbox, {flex:10}]} // adjust the style as needed
      />
    </View>


    <View style={{ flexDirection: "row", alignItems: "center", display: "flex", marginTop: -18 }}>
      <View style={[styles.groupChild, styles.groupLayout1]} />
      <Image
        style={[styles.key3SvgrepoCom1Icon, {flex: 1, height: 50, width: 50, resizeMode: "contain"}]}
        contentFit="contain"
        source={require("../../assets/passKeySymbol.png")}
      />
      <Input
        placeholder="Password"
        style={[styles.inputbox, {flex:10}]} // adjust the style as needed
      />
    </View>
  </View>
  );
};

const baseStyles = StyleSheet.create({
  groupLayout1: {
    height: 54,
    width: 532,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  inputbox: {
    backgroundColor: Color.colorWhite,
    height: 100,
    width: 532,
    paddingTop: 5,
    position: "relative",
    margin: 0,
    border: "none",
  },
  phoneTypo: {
    textAlign: "left",
    // color: Color.grayGray783878C,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: "50%",
    marginLeft: -193,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  groupChild: {
    top: -1,
    left: -1,
  },
  groupItem: {
    height: 54,
    width: 532,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  password: {
    top: "26.92%",
  },
  groupInner: {
    borderRadius: Border.br_16xl_5,
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  key3SvgrepoCom1Icon: {
    width: 25,
    height: 25,
    bottom: 23,
    overflow: "hidden",
    position: "relative",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    height: 40,
    width: 40,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupWrapper: {
    top: 6,
    left: 16,
  },
  rectangleGroup: {
    top: 76,
    height: 52,
    left: 0,
    width: 530,
    position: "absolute",
  },
  phone: {
    top: "10.94%",
  },
  rectangleParent: {
    top: 202,
    left: 760,
    height: 128,
    width: 530,
    position: "absolute",
  },
});

const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

// Check if width is less than or equal to 360 and height is less than or equal to 740
if (width >=360 && width < 415  && height <= 900) {
  styles = StyleSheet.create({
    ...baseStyles,
    rectangleParent:{
      top: 260,
      left: 28,
      height: 128,
      width: 312,
      position: "absolute",
    },
    groupLayout1:{
      position: "absolute",
      width: 130,
      left: 0,
    },
    groupLayout1: {
      height: 54,
      width: 310,
      borderWidth: 1,
      borderColor: Color.colorGainsboro,
      borderStyle: "solid",
      backgroundColor: Color.colorWhite,
      borderRadius: Border.br_3xs,
      position: "absolute",
    },
  });
}

export default SignInForm;