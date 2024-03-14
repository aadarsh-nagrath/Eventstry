import * as React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const SignInForm = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <TextInput
        style={[styles.groupItem, styles.phoneTypo]}
        placeholder="Password"
        placeholderTextColor="#83878c"
      />
      <Text style={[styles.phone, styles.phoneTypo]}>Phone</Text>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleWrapper, styles.wrapperPosition]}>
          <LinearGradient
            style={styles.wrapperPosition}
            locations={[0, 1]}
            colors={["rgba(255, 235, 220, 0)", "rgba(255, 235, 220, 0)"]}
          >
            <TextInput style={styles.textinput} />
          </LinearGradient>
        </View>
        <Image
          style={styles.call192SvgrepoCom31}
          contentFit="cover"
          source={require("../assets/call192svgrepocom-3-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    position: "absolute",
  },
  wrapperPosition: {
    top: 0,
    height: 40,
    width: 40,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: -1,
    left: -1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    width: 532,
    height: 54,
    position: "absolute",
  },
  groupItem: {
    top: 76,
    height: 52,
    left: 0,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    width: 530,
  },
  phone: {
    marginLeft: -193,
    top: "10.94%",
    left: "50%",
    color: Color.colorGray_200,
    textAlign: "left",
  },
  textinput: {
    borderRadius: Border.br_16xl_5,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  rectangleWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  call192SvgrepoCom31: {
    top: 8,
    left: 8,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  groupParent: {
    top: 6,
    left: 16,
    height: 40,
    width: 40,
    position: "absolute",
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
