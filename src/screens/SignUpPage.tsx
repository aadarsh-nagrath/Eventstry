import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground, Text, Dimensions, TouchableOpacity } from "react-native";
import SignUpForm from "../components/SignUpForm";
import styles from "./SignInPageStyle";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  let imageS;
  if (width <= 360 && height <= 740) {
    imageS = require("../../assets/rectangle-456.avif");
  } else {
    imageS = require("../../assets/frame319.png");
  }


  return (
    <View style={[styles.view, styles.viewLayout]}>
      <ImageBackground
        style={[styles.inner, styles.innerPosition]}
        resizeMode="cover"
        source={imageS}
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
            source={require("../../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-2.png")}
          />
        </View>
      </ImageBackground>
      <View style={[styles.fix]}>
        <View style={[styles.signInParent, styles.signPosition, {width:300}]}>
          <Text style={[styles.signIn, styles.signTypo]}>Sign up</Text>
        </View>
        <Text style={[styles.unlockYourWorld, styles.andClr]}>
        Unlock exclusive features, connect with like-minded individuals, and embark on your event 
        planning journey with us!
        </Text>
        <SignUpForm />
        <Button onPress={() => navigation.navigate("Home")} style={[styles2.bottonposition, styles.groupItemLayout, {backgroundColor: "#01235b"}]}> Sign Up</Button>
        <View
          style={[styles2.byClickingOnPosition, styles.signPosition]}
        >
          <Text style={[styles.byClickingOnContainer, {marginBottom: 10}]}>
            <Text
              style={styles.byClickingOnTypo}
            >{`By clicking on Sign up, you agree to our `}</Text>
            <Text style={[styles.termsOfService, styles.signIn1Typo]}>
              <b>Terms of service</b>
            </Text>
            <Text style={styles.andClr}>{` and `}</Text>
            <Text style={[styles.termsOfService, styles.signIn1Typo]}>
              Privacy Policy <span style={{color: "black"}}>.</span>
            </Text>
          </Text>
        </View>
        <Text style={[styles2.alreadyAccount, styles2.containerT, {marginTop: 15}]}>
          <Text style={styles.andClr}>{`Already have an Account? `}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignInPage")}>
          <Text style={styles2.signinTypo}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SignUpPage;


const baseStyles2 = StyleSheet.create({
  bottonposition: {
    top: 545,
    marginLeft: 45,
  },
  signinTypo: {
    color: "#01235b",
    fontFamily: "Avenir",
    fontSize: "18px",
    fontWeight: "800",
  },
  alreadyAccount: {
    left: 760,
    position: "relative",
    zIndex: 40,
  },
  containerT: {
    textAlign: "left",
    position: "relative",
    top: 670,
  },
  byClickingOnPosition: {
    top: 621,
    borderStyle: "solid",
    borderColor: "#e0dcdc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "Padding.p_base",
    width: 500,
  },
})


const { width, height } = Dimensions.get("window");
let styles2 = { ...baseStyles2 };

// Check if width is less than or equal to 360 and height is less than or equal to 740
if (width <= 360 && height <= 740) {
  styles2 = StyleSheet.create({
    ...baseStyles2,
    groupLayout1:{
      position: "absolute",
      width: 130,
      left: 0,
    },
    byClickingOnPosition: {
      top: 500,
      borderStyle: "solid",
      borderColor: "#e0dcdc",
      borderBottomWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: "Padding.p_base",
      width: 280,
    },
    bottonposition: {
      marginTop: 80,
      marginLeft: 45,
    },
    alreadyAccount: {
      left: 30,
      position: "relative",
      zIndex: 40,
    },
    containerT: {
      textAlign: "left",
      position: "relative",
      top: 500,
    },
  });
}