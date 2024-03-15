import * as React from "react";
import { Image } from "expo-image";
import { View, ImageBackground, Text, Dimensions } from "react-native";
import SignInForm from "../components/SignInForm";
import styles from "./SignInPageStyle";
import { Button } from "@ui-kitten/components";

const SignInPage = () => {
  const windowWidth = Dimensions.get('window').width;

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
      <View style={[styles.fix]}>
        <View style={[styles.signInParent, styles.signPosition]}>
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
        <Button style={[styles.rectangleParent, styles.groupItemLayout, {backgroundColor: "#01235b"}]}> Sign in</Button>
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
              Privacy Policy
            </Text>
            <Text style={styles.byClickingOnTypo}>.</Text>
          </Text>
        </View>
        <Text style={[styles.noAccountYetContainer, styles.containerTypo]}>
          <Text style={styles.andClr}>{`No account yet? `}</Text>
          <Text style={styles.signTypo}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInPage;
