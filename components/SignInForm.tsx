import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignInForm = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupLayout1]} />
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.password, styles.phoneTypo]}>Password</Text>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={styles.rectangleShadowBox}>
            <LinearGradient
              style={[styles.groupInner, styles.groupLayout]}
              locations={[0, 1]}
              colors={["rgba(255, 235, 220, 0)", "rgba(255, 235, 220, 0)"]}
            />
            <Image
              style={styles.key3SvgrepoCom1Icon}
              contentFit="cover"
              source={require("../assets/key3svgrepocom-1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.phone, styles.phoneTypo]}>Phone</Text>
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={styles.rectangleShadowBox}>
          <LinearGradient
            style={[styles.groupInner, styles.groupLayout]}
            locations={[0, 1]}
            colors={["rgba(255, 235, 220, 0)", "rgba(255, 235, 220, 0)"]}
          />
        </View>
        <Image
          style={styles.key3SvgrepoCom1Icon}
          contentFit="cover"
          source={require("../assets/call192svgrepocom-3-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  phoneTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
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
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
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
    left: 765,
    height: 128,
    width: 530,
    position: "absolute",
  },
});

export default SignInForm;
