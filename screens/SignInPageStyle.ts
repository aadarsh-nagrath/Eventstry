import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const styles = StyleSheet.create({
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
  }
});

export default styles;
