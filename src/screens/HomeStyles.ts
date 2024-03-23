import { Dimensions, StyleSheet } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../../GlobalStyles";

const baseStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    groupLayout: {
      width: "100%",
      overflow: "hidden",
    },
    frameBorder: {
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: Color.colorWhite,
    },
    enterCityTypo: {
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    findLayout: {
      width: 745,
      position: "absolute",
    },
    groupItemLayout1: {
      borderRadius: Border.br_8xs,
      position: "absolute",
    },
    venue2Typo: {
      color: Color.grayGray91F2730,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    seeMenuTypo: {
      fontFamily: FontFamily.trap,
      textTransform: "capitalize",
      textAlign: "left",
      fontWeight: "500",
      fontSize: FontSize.size_base,
    },
    iconLayout: {
      height: 24,
      width: 24,
      overflow: "hidden",
    },
    groupItemLayout: {
      height: 48,
      width: 388,
    },
    enterCity: {
      lineHeight: 22,
      color: Color.colorBlack,
      fontWeight: "500",
      textAlign: "left",
      fontFamily: FontFamily.avenir,
      fontSize: FontSize.size_base,
    },
    arrowDown1StreamlineStreaIcon: {
      width: 18,
      height: 18,
      marginLeft: 79,
      overflow: "hidden",
    },
    enterCityParent: {
      width: 174,
      height: 19,
      alignItems: "center",
      flexDirection: "row",
    },
    frameWrapper: {
      borderRadius: Border.br_7xl,
      borderColor: Color.colorDarkslateblue,
      width: 210,
      paddingHorizontal: Padding.p_5xl,
      paddingVertical: Padding.p_smi,
    },
    frameParent: {
      top: 307,
      left: 708,
      flexDirection: "row",
      position: "absolute",
    },
    cardContainer: {
      padding: 15,
    },
    content: {
      flex: 1,
      padding: 16,
    },
    
    child: {
      top: 111,
      left: -151,
      width: 749,
      height: 749,
      position: "absolute",
    },
    findThePerfect: {
      top: 35,
      fontSize: 56,
      lineHeight: 60,
      color: Color.colorDarkslateblue,
      fontWeight: "800",
      left: 0,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    groupChild: {
      left: 5,
      width: 36,
      height: 26,
      top: 0,
      position: "absolute",
    },
    findThePerfectCelebrationFParent: {
      top: 112,
      height: 155,
      left: 70,
    },
    logo39ab30e9cd984a48cdd3b9dbbIcon: {
      top: 0,
      left: 0,
      overflow: "hidden",
    },
    logo39ab30e9cd984a48cdd3b9dbbWrapper: {
      top: 19,
      left: 70,
    },
    groupParent: {
      height: 80,
      top: 0,
      left: 0,
      position: "absolute",
      overflow: "hidden",
    },
    frameChild: {
      height: 220,
      width: 388,
      overflow: "hidden",
    },
    venue2: {
      fontSize: FontSize.size_5xl,
      fontWeight: "800",
    },
    letEventstryPlan: {
      marginTop: 16,
      width: 388,
      fontSize: FontSize.size_base,
      color: Color.grayGray91F2730,
    },
    jioWorldGarden: {
      fontSize: FontSize.size_sm,
      lineHeight: 20,
      width: 356,
      marginLeft: 8,
    },
    locationPin1StreamlineCorParent: {
      justifyContent: "center",
      marginTop: 16,
      flexDirection: "row",
    },
    venue2Parent: {
      height: 149,
      marginTop: 16,
    },
    seeMenu: {
      textDecoration: "underline",
      color: Color.colorDarkslateblue,
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
      borderRadius: Border.br_8xs,
      position: "absolute",
      top: 0,
      left: 0,
    },
    exploreNow: {
      top: 15,
      left: 145,
      color: Color.colorWhite,
      position: "absolute",
    },
    rectangleParent: {
      marginTop: 16,
    },
    component3Parent: {
      marginTop: 16,
      alignItems: "center",
    },
    frameContainer: {
      top: 564,
      left: 510,
      borderColor: Color.colorSienna,
      height: 521,
      padding: Padding.p_base,
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: Color.colorWhite,
      overflow: "hidden",
    },
    frameGroup: {
      top: 369,
      // height: 1649,
      display: "inline-flex",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "transparent",
      left: 0,
      position: "absolute",
      overflow: "hidden",
      paddingBottom: 40, 
    },
    view: {
      height: 2420,
      overflow: "hidden",
      backgroundColor: Color.colorWhite,
      width: "100%",
    },
    valueFont: {
      fontFamily: FontFamily.avenir,
    }
  });


  const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

// Check if width is less than or equal to 360 and height is less than or equal to 740
if (width > 1410  && height <= 740) {
  styles = StyleSheet.create({
    ...baseStyles,
    cardContainer: {
      padding: 30,
    },
  });
}

if (width >=360 && width < 415  && height <= 900) {
  styles = StyleSheet.create({
    ...baseStyles,
    findThePerfectCelebrationFParent: {
      top: 90,
      height: 155,
      left: 20,
    },
    findThePerfect: {
      top: 35,
      fontSize: 26,
      lineHeight: 30,
      color: Color.colorDarkslateblue,
      fontWeight: "800",
      left: 0,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    findLayout: {
      width: 245,
      position: "absolute",
    },
    frameGroup: {
      top: 219,
      // height: 1649,
      display: "inline-flex",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "transparent",
      left: 0,
      position: "absolute",
      overflow: "hidden",
      paddingBottom: 40, 
    },
    cardContainer: {
      paddingLeft: 0,
      padding: 6,
      marginLeft: -5,
    },
    groupLayout: {
      width: "100%",
      height:"100",
      overflow: "scroll",
    },
    child: {
      top: 61,
      left: -241,
      width: 749,
      height: 749,
      position: "absolute",
    },
  });
}


export default styles;