import { StyleSheet } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import { Dimensions } from "react-native";

const baseStyles = StyleSheet.create({
    groupItemLayout: {
      borderRadius: Border.br_8xs,
      position: "absolute",
    },
    frameChildLayout: {
      height: 220,
      width: 388,
    },
    groupChildPosition: {
      left: 0,
      top: 0,
    },
    groupChildLayout: {
      height: 120,
      width: 120,
      position: "absolute",
    },
    venue1Typo: {
      color: Color.grayGray91F2730,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    sTypo: {
      fontFamily: FontFamily.trap,
      fontWeight: "500",
      textTransform: "capitalize",
      fontSize: FontSize.size_base,
      textAlign: "left",
    },
    iconLayout: {
      height: 24,
      width: 24,
      overflow: "hidden",
    },
    groupLayout: {
      height: 48,
      width: 388,
    },
    frameChild: {
      borderRadius: 9,
      height: 220,
      width: 388,
      position: "absolute",
    },
    groupChild: {
      left: 0,
      top: 0,
    },
    text: {
      top: "13.33%",
      left: "22.5%",
      fontSize: FontSize.size_xl,
      color: Color.colorTomato,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
      fontWeight: "800",
      position: "absolute",
    },
    ellipseParent: {
      top: 168,
      left: 262,
    },
    rectangleParent: {
      overflow: "hidden",
    },
    venue1: {
      fontSize: FontSize.size_5xl,
      fontWeight: "800",
      color: Color.grayGray91F2730,
    },
    letEventstryPlan: {
      fontSize: FontSize.size_base,
      color: Color.grayGray91F2730,
      marginTop: 16,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
      width: 388,
    },
    jioWorldGarden: {
      fontSize: FontSize.size_sm,
      lineHeight: 20,
      width: 356,
      marginLeft: 8,
    },
    locationPin1StreamlineCorParent: {
      justifyContent: "center",
      flexDirection: "row",
      marginTop: 16,
    },
    venue1Parent: {
      height: 149,
      marginTop: 16,
    },
    divsCardIcon: {
      borderRadius: Border.br_xs,
      marginLeft: 8,
    },
    component3: {
      alignItems: "center",
      flexDirection: "row",
    },
    groupItem: {
      backgroundColor: Color.colorDarkslateblue,
      left: 0,
      top: 0,
      borderRadius: Border.br_8xs,
      position: "absolute",
    },
    exploreNow: {
      top: 15,
      left: 145,
      color: Color.colorWhite,
      position: "absolute",
    },
    rectangleGroup: {
      marginTop: 16,
    },
    component3Parent: {
      alignItems: "center",
      marginTop: 16,
    },
    frameParent: {
      top: 23,
      left: 20,
      backgroundColor: Color.colorWhite,
      borderStyle: "solid",
      borderColor: Color.colorSienna,
      borderWidth: 1,
      padding: Padding.p_base,
      overflow: "hidden",
    },
  });

  const { width, height } = Dimensions.get("window");
  let styles = { ...baseStyles };

  if (width >=360 && width < 415  && height <= 740) {
    styles = StyleSheet.create({
      ...baseStyles,
      frameChildLayout: {
        height: 180,
        width: 300,
      },
      groupChildLayout: {
        height: 80,
        width: 80,
        position: "absolute",
      },
      venue1: {
        fontSize: 26,
        fontWeight: "800",
        color: Color.grayGray91F2730,
        width: 300,
      },
      letEventstryPlan: {
        fontSize: FontSize.size_base,
        color: Color.grayGray91F2730,
        marginTop: 16,
        textAlign: "left",
        fontFamily: FontFamily.avenir,
        width: 300,
      },
      locationPin1StreamlineCorParent: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 16,
        width: 300,
      },
      groupLayout: {
        height: 48,
        width: 300,
      },
    });
  }
  

  export default styles;
  