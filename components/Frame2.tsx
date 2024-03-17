import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import { Button as RNKButton } from "@ui-kitten/components";
import { Button } from "@rneui/themed";
import Property1Disable from "./Property1Disable";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={[styles.view, styles.viewLayout]}>
      <ImageBackground
        style={[styles.inner, styles.innerPosition]}
        resizeMode="cover"
        source={require("../assets/Home19.png")}
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
      <View style={[styles.signUpParent, styles.signPosition]}>
        <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
        <Image
          style={[styles.groupChild, styles.innerPosition]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <Text style={[styles.unlockExclusiveFeatures, styles.andClr]}>
        Unlock exclusive features, connect with like-minded individuals, and
        embark on your event planning journey with us!
      </Text>
      <View
        style={[styles.byClickingOnSignInYouAgWrapper, styles.signPosition]}
      >
        <Text style={[styles.byClickingOnContainer, styles.containerTypo]}>
          <Text
            style={styles.byClickingOn}
          >{`By clicking on Sign in, you agree to our `}</Text>
          <Text style={[styles.termsOfService, styles.signInTypo]}>
            Terms of service
          </Text>
          <Text style={styles.andClr}>{` and `}</Text>
          <Text style={[styles.termsOfService, styles.signInTypo]}>
            Privacy Policy
          </Text>
          <Text style={styles.byClickingOn}>.</Text>
        </Text>
      </View>
      <Text style={[styles.noAccountYetContainer, styles.containerTypo]}>
        <Text style={styles.andClr}>{`No account yet? `}</Text>
        <Text style={styles.signTypo}>Sign up</Text>
      </Text>
      <RNKButton
        style={[styles.rectangleParent, styles.groupItemLayout]}
        title="Sign in"
        size="medium"
        status="primary"
        appearance="filled"
        textStyle={styles.groupButtonText}
      >
        Sign in
      </RNKButton>
      <TextInput
        style={[styles.child, styles.childTypo]}
        placeholder="Name"
        placeholderTextColor="#83878c"
      />
      <TextInput
        style={[styles.item, styles.childTypo]}
        placeholder="Phone"
        placeholderTextColor="#83878c"
      />
      <Property1Disable
        property1DisablePosition="unset"
        property1DisableBackgroundColor="unset"
        property1DisableOverflow="unset"
        property1DisableFlexDirection="unset"
        property1DisablePaddingHorizontal="unset"
        property1DisablePaddingVertical="unset"
      />
      <TextInput
        style={[styles.groupTextinput, styles.childTypo]}
        placeholder="Email Address"
        placeholderTextColor="#83878c"
      />
      <TextInput
        style={[styles.child1, styles.childTypo]}
        placeholder="Password"
        placeholderTextColor="#83878c"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonText: {
    fontWeight: "800",
    fontFamily: "Avenir",
  },
  frameButtonBtn: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    fontFamily: "Avenir",
  },
  frameButtonBtn1: {
    left: 1209,
    top: 287,
    position: "absolute",
  },
  frameButtonBtn2: {
    borderRadius: 4,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
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
  containerTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  signInTypo: {
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
  },
  groupItemLayout: {
    height: 62,
    width: 530,
    left: "50%",
    position: "absolute",
  },
  signInPosition: {
    left: "50%",
    position: "absolute",
  },
  childTypo: {
    height: 52,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    width: 530,
    fontFamily: FontFamily.avenir,
    left: 765,
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
  signUp: {
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
  signUpParent: {
    top: 28,
    width: 142,
    height: 94,
  },
  unlockExclusiveFeatures: {
    top: "17.14%",
    fontSize: FontSize.size_base,
    lineHeight: 20,
    width: 530,
    left: "50%",
    position: "absolute",
    marginLeft: 45,
    textAlign: "left",
  },
  byClickingOn: {
    fontWeight: "500",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
  },
  termsOfService: {
    color: Color.colorTomato,
  },
  byClickingOnContainer: {
    width: 530,
  },
  byClickingOnSignInYouAgWrapper: {
    top: 596,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: Padding.p_base,
    width: 530,
  },
  noAccountYetContainer: {
    top: "84.22%",
    left: "50%",
    position: "absolute",
    marginLeft: 45,
  },
  rectangleParent: {
    top: 510,
    marginLeft: 45,
  },
  child: {
    top: 202,
  },
  item: {
    top: 278,
  },
  groupTextinput: {
    top: 354,
  },
  child1: {
    top: 430,
  },
  view: {
    backgroundColor: Color.colorWhite,
    width: 1440,
    overflow: "hidden",
  },
});

export default Frame2;
