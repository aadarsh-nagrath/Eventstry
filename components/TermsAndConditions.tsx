import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const TermsAndConditions = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View
          style={[styles.termsConditionsWrapper, styles.groupChildPosition]}
        >
          <Text style={styles.termsConditionsContainer}>
            <Text style={styles.text}>-</Text>
            <Text style={styles.termsConditions}>{` Terms & Conditions`}</Text>
          </Text>
        </View>
      </View>
      <Text
        style={[styles.pleaseCarryA, styles.frameParentPosition]}
      >{`Please carry a valid ID proof along with you.
No refunds on purchased ticket are possible, even in case of any rescheduling.
Security procedures, including frisking remain the right of the management.
No dangerous or potentially hazardous objects including but not limited to weapons, knives, guns, fireworks, helmets, lazer devices, bottles, musical instruments will be allowed in the venue and may be ejected with or without the owner from the venue.
The sponsors/performers/organizers are not responsible for any injury or damage occurring due to the event. Any claims regarding the same would be settled in courts in Mumbai.
People in an inebriated state may not be allowed entry.
Organizers hold the right to deny late entry to the event.
Venue rules apply.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  groupChildPosition: {
    alignItems: "center",
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    width: "30.8%",
    right: "69.2%",
    borderColor: Color.colorDarkslateblue,
    borderBottomWidth: 2.5,
  },
  text: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
  },
  termsConditions: {
    fontWeight: "500",
    fontFamily: FontFamily.avenir,
  },
  termsConditionsContainer: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  termsConditionsWrapper: {
    borderColor: Color.colorGainsboro,
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingTop: Padding.p_9xl,
    paddingBottom: Padding.p_base,
    right: "0%",
    width: "100%",
    alignItems: "center",
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
  },
  frameParent: {
    height: "13.85%",
    bottom: "86.15%",
    right: "0%",
    top: "0%",
    left: "0%",
  },
  pleaseCarryA: {
    top: "19.23%",
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
    textAlign: "left",
  },
  groupParent: {
    top: 265,
    left: 0,
    width: 750,
    height: 520,
    position: "absolute",
  },
});

export default TermsAndConditions;
