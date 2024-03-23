import {Dimensions, StyleSheet} from 'react-native';
import { FontFamily, Color, Padding, FontSize, Border } from "../../GlobalStyles";
const baseStyles = StyleSheet.create({
    logo39ab30e9cd984a48cdd3b9dbbLayout: {
      height: 42,
      width: 166,
      position: "absolute",
    },
    container: {
      flex: 1,
      width: "100%",
      maxWidth: "1200px", // Adjust maximum width for better readability
  },
  mainContent: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
  },
    aboutTypo: {
      fontFamily: FontFamily.avenir,
      textAlign: "left",
    },
    iconLayout: {
      height: 24,
      width: 24,
      overflow: "hidden",
    },
    backTypo: {
      color: Color.grayGray91F2730,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    groupItemPosition: {
      top: 46,
      position: "absolute",
    },
    frameGroupPosition: {
      height: 72,
      left: 0,
      position: "absolute",
    },
    wrapperPosition: {
      paddingBottom: Padding.p_base,
      paddingTop: Padding.p_9xl,
      flexDirection: "row",
      borderBottomWidth: 1,
      alignItems: "center",
      width: 750,
      borderColor: Color.colorGainsboro,
      borderStyle: "solid",
      left: 0,
      position: "absolute",
    },
    backTypo1: {
      fontSize: FontSize.size_xl,
      lineHeight: 28,
    },
    jioWorldGardenTypo: {
      lineHeight: 24,
      width: 750,
      color: Color.grayGray91F2730,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
      fontSize: FontSize.size_base,
      left: 0,
      position: "absolute",
    },
    parentLayout: {
      height: 539,
      width: 420,
    },
    component3ParentBorder: {
      borderWidth: 1,
      borderStyle: "solid",
      left: 0,
      position: "absolute",
      overflow: "hidden",
    },
    rectanglePosition: {
      height: 62,
      marginLeft: -194,
      width: 388,
      left: "50%",
      position: "absolute",
    },
    parentPosition: {
      left: 16,
      position: "absolute",
    },
    textTypo: {
      fontSize: FontSize.size_13xl,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    logo39ab30e9cd984a48cdd3b9dbbIcon: {
      left: 0,
      top: 0,
      overflow: "hidden",
    },
    logo39ab30e9cd984a48cdd3b9dbbWrapper: {
      top: 19,
      left: 70,
    },
    groupChild: {
      top: -2,
      left: -2,
      borderRadius: Border.br_16xl_5,
      borderWidth: 2,
      width: 415,
      height: 48,
      borderColor: Color.colorGainsboro,
      borderStyle: "solid",
      position: "absolute",
    },
    search: {
      top: 11,
      left: 24,
      lineHeight: 22,
      color: Color.colorGray_200,
      textAlign: "left",
      fontWeight: "500",
      fontSize: FontSize.size_base,
      position: "absolute",
    },
    iconOutlinedSearch: {
      top: 10,
      left: 363,
      position: "absolute",
    },
    rectangleParent: {
      top: 18,
      left: 515,
      width: 411,
      height: 44,
      position: "absolute",
    },
    groupParent: {
      width: 1440,
      height: 80,
      left: 0,
      top: 0,
      position: "absolute",
      overflow: "hidden",
    },
    back: {
      lineHeight: 28,
      fontSize: FontSize.size_xl,
      fontWeight: "500",
      left: 0,
      top: 0,
      position: "absolute",
    },
    groupItem: {
      height: 380,
      width: 750,
      borderRadius: Border.br_3xs,
      left: 0,
      overflow: "hidden",
    },
    mbfix:{
      display: "flex",
    },
    groupInner: {
      width: 69,
      alignItems: "center",
      borderBottomWidth: 2.5,
      height: 72,
      borderColor: Color.colorDarkslateblue,
      borderStyle: "solid",
      top: 426,
    },
    about: {
      color: Color.colorDarkslateblue,
      fontWeight: "800",
      lineHeight: 28,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    aboutWrapper: {
      top: 426,
    },
    welcomeToEventstry: {
      top: 526,
    },
    seeMenu: {
      textDecoration: "underline",
      textTransform: "capitalize",
      fontFamily: FontFamily.trap,
      color: Color.colorDarkslateblue,
      textAlign: "left",
      fontWeight: "500",
      fontSize: FontSize.size_base,
    },
    divsCardIcon: {
      borderRadius: Border.br_xs,
      marginLeft: 8,
    },
    component3: {
      top: 662,
      flexDirection: "row",
      alignItems: "center",
      left: 0,
      position: "absolute",
    },
    component31: {
      top: 393,
      left: 156,
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
    },
    rectangleView: {
      backgroundColor: Color.colorDarkslateblue,
      borderRadius: Border.br_3xs,
      top: 0,
    },
    bookNow: {
      marginLeft: -47,
      top: "29.03%",
      color: Color.colorWhite,
      left: "50%",
      fontWeight: "800",
      fontSize: FontSize.size_xl,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
      position: "absolute",
    },
    rectangleGroup: {
      top: 437,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 15,
      elevation: 15,
      shadowOpacity: 1,
    },
    component3Parent: {
      backgroundColor: Color.colorSnow,
      borderColor: Color.colorPeachpuff,
      height: 539,
      width: 420,
      borderRadius: Border.br_3xs,
      top: 0,
    },
    venue1: {
      color: Color.colorDarkslateblue,
      lineHeight: 28,
      fontWeight: "500",
    },
    venue1Wrapper: {
      paddingHorizontal: 0,
      paddingVertical: Padding.p_xl,
      width: 388,
      flexDirection: "row",
      borderBottomWidth: 1,
      left: 16,
      alignItems: "center",
      borderColor: Color.colorDarkslateblue,
      borderStyle: "solid",
      top: 0,
    },
    text: {
      color: Color.colorTomato,
      fontWeight: "800",
    },
    frameChild: {
      width: 40,
      height: 40,
      marginLeft: 244,
    },
    parent: {
      top: 84,
      flexDirection: "row",
      alignItems: "center",
    },
    thingsToKeep: {
      fontSize: FontSize.size_lg,
      color: Color.colorDarkslateblue,
      textAlign: "left",
      fontWeight: "500",
    },
    cancellationPolicyAnd: {
      marginTop: 8,
      width: 388,
      fontSize: FontSize.size_base,
      overflow: "hidden",
    },
    thingsToKeepInMindParent: {
      top: 144,
      width: 388,
    },
    frameParent: {
      left: 790,
      top: 46,
      position: "absolute",
    },
    frameView: {
      width: 93,
      alignItems: "center",
      borderBottomWidth: 2.5,
      height: 72,
      borderColor: Color.colorDarkslateblue,
      borderStyle: "solid",
      top: 0,
    },
    venueWrapper: {
      top: 0,
    },
    frameGroup: {
      width: 750,
      top: 0,
    },
    jioWorldGarden: {
      top: 100,
    },
    getDirections: {
      fontSize: FontSize.size_xs,
      color: Color.colorDarkslateblue,
      fontWeight: "800",
      lineHeight: 28,
      textAlign: "left",
    },
    getDirectionsWrapper: {
      top: 189,
      borderRadius: Border.br_8xs,
      paddingHorizontal: Padding.p_5xs,
      paddingVertical: Padding.p_9xs,
      flexDirection: "row",
      borderColor: Color.colorDarkslateblue,
      borderWidth: 1,
    },
    groupContainer: {
      top: 714,
      height: 785,
      width: 750,
      left: 0,
      position: "absolute",
    },
    backParent: {
      top: 120,
      left: 115,
      width: 1210,
      height: 1499,
      position: "absolute",
    },
    view: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      height: "100%",
    },
  })
  
  const { width, height } = Dimensions.get("window");
  let styles = { ...baseStyles };
  
  if (width >=360 && width < 415  && height <= 900) {
    styles = StyleSheet.create({
      ...baseStyles,
      mbfix: {
        display: "none",
      },
      component3Parent: {
        backgroundColor: Color.colorSnow,
        borderColor: Color.colorPeachpuff,
        height: 250,
        width: 320,
        borderRadius: Border.br_3xs,
        top: 0,
        overflow: "hidden",
      },
      parentLayout: {
        height: 250,
        width: 320,
        overflow: "hidden",
      },
      frameParent: {
        left: 6,
        top: 176,
        position: "absolute",
      },
      backParent: {
        top: 80,
        left: 15,
        width: 336,
        height: 1499,
        position: "absolute",
      },
      groupItem: {
        height: 200,
        width: 330,
        left: 0,
      },
      wrapperPosition:{
        top: 250,
        width: 330,
      },
      jioWorldGardenTypo:{
        position: "absolute",
        width: 330,
        top: 510,
      },
      frameChild: {
        width: 40,
        height: 40,
        marginLeft: 164,
      },
      //font
      textTypo: {
        fontSize: 25,
        fontWeight: "500",
      },
      groupContainer:{
        width:330,
        top: 500,
      },
      divsCardIcon: {
        width: 100,
        top:-20,
        marginLeft: 70,
      },
      jioWorldGarden: {
        position: "absolute",
        top: 30,
      },
      frameGroup:{
        width: 330,
      },
      seemenu:{
        width: 100,
      },
    });
  }
export default styles;
  