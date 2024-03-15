import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import SignInForm from "../components/SignInForm";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={[styles.view, styles.viewLayout]}>
      <ImageBackground
        style={[styles.inner, styles.innerPosition]}
        resizeMode="cover"
        source={require("../assets/frame3191.png")}
      >
        <View
          style={[
            styles.logo39ab30e9cd984a48cdd3b9dbbWrapper,
            styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
          ]}
        >
          <Image
            style={[
              styles.logo39ab30e9cd984a48cdd3b9dbbIcon,
              styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
            ]}
            contentFit="cover"
            source={require("../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-2.png")}
          />
        </View>
      </ImageBackground>
      <View style={[styles.signInParent, styles.signPosition]}>
        <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
        <Image
          style={[styles.groupChild, styles.innerPosition]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <Text style={[styles.unlockYourWorld, styles.andClr]}>
        Unlock Your World: Sign in now to dive into personalized events planning
        tailored to your interests!
      </Text>
      <Text style={[styles.forgotPassword, styles.byClickingOnTypo]}>
        Forgot Password?
      </Text>
      <View
        style={[styles.byClickingOnSignInYouAgWrapper, styles.signPosition]}
      >
        <Text style={[styles.byClickingOnContainer, styles.containerTypo]}>
          <Text
            style={styles.byClickingOnTypo}
          >{`By clicking on Sign in, you agree to our `}</Text>
          <Text style={[styles.termsOfService, styles.signIn1Typo]}>
            Terms of service
          </Text>
          <Text style={styles.andClr}>{` and `}</Text>
          <Text style={[styles.termsOfService, styles.signIn1Typo]}>
            Privacy Policy
          </Text>
          <Text style={styles.byClickingOnTypo}>.</Text>
        </Text>
      </View>
      <Text style={[styles.noAccountYetContainer, styles.containerTypo]}>
        <Text style={styles.andClr}>{`No account yet? `}</Text>
        <Text style={styles.signTypo}>Sign up</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.signIn1, styles.signIn1Position]}>Sign in</Text>
      </View>
      <SignInForm />
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 805,
    overflow: "hidden",
  },
  innerPosition: {
    position: "absolute",
    left: 0,
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 42,
    width: 166,
    position: "absolute",
  },
  signPosition: {
    left: 765,
    position: "absolute",
  },
  signTypo: {
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
  },
  andClr: {
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
  },
  byClickingOnTypo: {
    fontWeight: "500",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
  },
  containerTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  signIn1Typo: {
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
  },
  groupItemLayout: {
    height: 62,
    width: 530,
    left: "50%",
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
    height: 805,
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
    top: "17.14%",
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "300",
    width: 530,
    left: "50%",
    position: "absolute",
    marginLeft: 45,
    textAlign: "left",
  },
  forgotPassword: {
    marginLeft: 427,
    top: "42.98%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    position: "absolute",
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
    width: 530,
  },
  noAccountYetContainer: {
    top: "69.94%",
    left: "50%",
    position: "absolute",
    marginLeft: 45,
  },
  groupItem: {
    marginLeft: -265,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslateblue,
    top: 0,
  },
  signIn1: {
    marginLeft: -32,
    top: "29.03%",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
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
});

export default Frame1;
