import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "./FrameComponent";
import { FontFamily, Color, FontSize, Padding } from "../../GlobalStyles";

const BookingFormContainer = () => {
  return (
    <View style={styles.frameParent}>
      <FrameComponent />
      <View style={[styles.venue1Wrapper, styles.parentFlexBox]}>
        <Text style={[styles.venue1, styles.textTypo]}>Venue 1</Text>
      </View>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../../assets/group-240.png")}
        />
      </View>
      <View style={styles.thingsToKeepInMindParent}>
        <Text style={[styles.thingsToKeep, styles.textTypo]}>
          Things to Keep in mind
        </Text>
        <Text
          style={[styles.cancellationPolicyAnd, styles.textTypo]}
        >{`Cancellation policy and payment terms
Easy access and parking
Event insurance is included
Cancellation policy and payment terms
Easy access and parking
Event insurance is included
Cancellation policy and payment terms
Easy access and parking`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  venue1: {
    lineHeight: 28,
    color: Color.colorDarkslateblue,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_13xl,
  },
  venue1Wrapper: {
    top: 0,
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue,
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
    width: 388,
  },
  text: {
    fontWeight: "800",
    color: Color.colorTomato,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_13xl,
  },
  frameChild: {
    width: 40,
    height: 40,
    marginLeft: 244,
  },
  parent: {
    top: 84,
  },
  thingsToKeep: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslateblue,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  cancellationPolicyAnd: {
    fontSize: FontSize.size_base,
    color: Color.grayGray91F2730,
    marginTop: 8,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    width: 388,
  },
  thingsToKeepInMindParent: {
    top: 148,
    width: 388,
    left: 16,
    position: "absolute",
  },
  frameParent: {
    top: 46,
    left: 790,
    width: 420,
    height: 480,
    position: "absolute",
  },
});

export default BookingFormContainer;
