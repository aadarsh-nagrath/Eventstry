import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground, Text, Dimensions, TouchableOpacity } from "react-native";
import SignInForm from "../components/SignInForm";
import styles from "./SignInPageStyle";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const SignInPage = () => {
  const naviagtion = useNavigation();
  const { width, height } = Dimensions.get("window");

  let imageS;
  if (width <= 360 && height <= 740) {
    imageS = require("../../assets/rectangle-123.avif");
  } else {
    imageS = require("../../assets/frame3191.png");
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
          <View >
          <View style={[styles.fix]}>
            <View style={[styles.signInParent, styles.signPosition, styles.f]}>
              <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
            </View>
            <Text style={[styles.unlockYourWorld, styles.andClr]}>
              Unlock Your World: Sign in now to dive into personalized events planning
              tailored to your interests!
            </Text>
            <SignInForm />
            <Text style={[styles.forgotPassword, styles.byClickingOnTypo]}>
              Forgot Password?
            </Text>
            <Button onPress={() => naviagtion.navigate("Home")} style={[styles.rectangleParent, styles.groupItemLayout, {backgroundColor: "#01235b"}]}> Sign in</Button>
            <View
              style={[styles.byClickingOnSignInYouAgWrapper, styles.signPosition]}
            >
              <Text style={[styles.byClickingOnContainer]}>
                <Text
                  style={styles.byClickingOnTypo}
                >{`By clicking on Sign in, you agree to our `}</Text>
                <Text style={[styles.termsOfService, styles.signIn1Typo]}>
                  <b>Terms of service</b>
                </Text>
                <Text style={styles.andClr}>{` and `}</Text>
                <Text style={[styles.termsOfService, styles.signIn1Typo]}>
                  Privacy Policy <span style={{color: "black"}}>.</span>
                </Text>
              </Text>
            </View>
            <Text style={[styles.noAccountYetContainer, styles.containerTypo]}>
              <Text style={styles.andClr}>{`No account yet? `}</Text>
              <TouchableOpacity onPress={() => naviagtion.navigate("SignUpPage")}>
              <Text style={styles.signTypo}>Sign up</Text>
              </TouchableOpacity>
            </Text>
            </View>
          </View>
    </View>
  );
};

export default SignInPage;
