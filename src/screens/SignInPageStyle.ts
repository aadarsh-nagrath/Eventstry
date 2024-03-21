import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import { Dimensions } from "react-native";

const baseStyles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "800",
    fontFamily: "Avenir",
  },
  viewLayout: {
    height: "100%",
    overflow: "hidden",
  },
  innerPosition: {
    position: "absolute",
    left: 0,
    flex: 1,
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 42,
    width: 166,
    position: "absolute",
  },
  signPosition: {
    left: 758,
    position: "absolute",
  },
  signTypo: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
  },
  andClr: {
    color: Color.grayGray91F2730,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.avenir,
  },
  byClickingOnTypo: {
    fontWeight: "500",
    color: Color.grayGray91F2730,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  containerTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "relative",
    top: 550,
  },
  signIn1Typo: {
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_lg,
    fontWeight: "800",
  },
  groupItemLayout: {
    height: 62,
    width: 530,
    left: 715,
    position: "absolute",
  },
  signIn1Position: {
    left: "50%",
    position: "absolute",
  },
  logo39ab30e9cd984a48cdd3b9dbbIcon: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  logo39ab30e9cd984a48cdd3b9dbbWrapper: {
    top: 22,
    left: 70,
  },
  inner: {
    width: 620,
    left: 0,
    top: 0,
    overflow: "hidden",
    height: "100%",
  },
  signIn: {
    top: 34,
    fontSize: FontSize.size_21xl,
    lineHeight: 60,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  groupChild: {
    width: 36,
    height: 26,
    left: 0,
    top: 0,
  },
  signInParent: {
    top: 28,
    width: 127,
    height: 94,
  },
  unlockYourWorld: {
    top: 138,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    left: 760,
    position: "absolute",
    textAlign: "left",
    width: 500,
  },
  forgotPassword: {
    marginLeft: 427,
    top:350,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 730,
    position: "absolute",
    fontWeight: "bold",
  },
  termsOfService: {
    color: Color.colorTomato,
  },
  byClickingOnContainer: {
    width: 530,
  },
  byClickingOnSignInYouAgWrapper: {
    top: 481,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: Padding.p_base,
    width: 500,
  },
  noAccountYetContainer: {
    top: 500,
    left: 715,
    position: "absolute",
    marginLeft: 45,
  },
  rectangleParent: {
    top: 395,
    marginLeft: 45,
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  fix: {
    height: "100%",
    width: "100%",
  },
  f: {
    display: "flex",
  },
});

const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

// Check if width is less than or equal to 360 and height is less than or equal to 740
if (width <= 360 && height <= 740) {
  styles = StyleSheet.create({
    ...baseStyles,
    logo39ab30e9cd984a48cdd3b9dbbIcon: {
      left: -40,
    },
    signPosition: {
      left: 30,
    },
    f: {
      top: 80,
    },
    unlockYourWorld: {
      position: "absolute",
      left: "8%",
      top: 180,
      width: 314,
    },
    forgotPassword: {
      position: "absolute",
      left: 230,
      top: 415,
    },
    byClickingOnSignInYouAgWrapper: {
      position: "absolute",
      left: "10%",
      top: 520,
      paddingBottom: 20,
      borderStyle: "solid",
      borderColor: Color.colorGainsboro,
      borderBottomWidth: 1,
      width: 280,
    },
    groupItemLayout: {
      position: "absolute",
      left: "-5%",
      top: 460,
      width: 314,
    },
    byClickingOnTypo: {
      display: "flex",
      flexWrap: "wrap",
    },
    byClickingOnContainer: {
      width: 314,
      borderBottom: "1px solid #d3d3d3",
    },
    noAccountYetContainer: {
      position: "absolute",
      left: "9%",
    },
    containerTypo: {
      position: "absolute",
      top: 595,
    },
    andClr: {
      fontSize: 15,
      color: "black"
    },
    signIn: {
      top: 40,
      left: 0,
      position: "absolute",
      fontSize: 40
    },
    inner: {
      width: 620,
      left: 0,
      top: 0,
      overflow: "hidden",
      height: "57%",
      "-webkit-mask-image": "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
      "mask-image": "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    },
  });
}


export default styles;