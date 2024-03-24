import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

const TermsAndConditions = () => {
  return (
    <View style={[styles.groupParent]}>
      <View style={[styles.frameParent, styles.frameParentPosition ]}>
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
      <Text style={[styles.pleaseCarryA, styles.frameParentPosition]}>
        <ul style={{ paddingLeft: 20 }}>
          <li>Please carry a valid ID proof along with you.</li>
          <li>
            No refunds on purchased tickets are possible, even in case of any
            rescheduling.
          </li>
          <li>
            Security procedures, including frisking, remain the right of the
            management.
          </li>
          <li>
            No dangerous or potentially hazardous objects, including but not
            limited to weapons, knives, guns, fireworks, helmets, laser devices,
            bottles, musical instruments, will be allowed in the venue and may
            result in ejection from the venue, with or without the owner.
          </li>
          <li>
            The sponsors, performers, and organizers are not responsible for any
            injury or damage occurring due to the event. Any claims regarding
            the same would be settled in courts in Mumbai.
          </li>
          <li>People in an inebriated state may not be allowed entry.</li>
          <li>Organizers hold the right to deny late entry to the event.</li>
          <li>Venue rules apply.</li>
        </ul>
      </Text>
    </View>
  );
};

const baseStyles = StyleSheet.create({
  frameParentPosition: {
    left: "0%",
    marginTop: -20,
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


const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

if (width >=360 && width < 415 ) {
  styles = StyleSheet.create({
    ...baseStyles,
    groupParent: {
      top: 235,
      left: 0,
      width: 330,
      height: 520,
      position: "absolute",
      backgroundColor: "#fef9f6",
    },
    pleaseCarryA: {
      top: 80,
      backgroundColor: "transparent"
    },
    frameParent: {
      backgroundColor: "transparent",
    }
  });
}
export default TermsAndConditions;
