import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import TermsAndConditionsSection from "../components/TermsAndConditionsSection";
import SearchContainer from "../components/SearchContainer";
import LoginContainer from "../components/LoginContainer";
import BookingFormContainer from "../components/BookingFormContainer";
import TermsAndConditionsContainer from "../components/TermsAndConditionsContainer";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <TermsAndConditionsSection
        uniqueIdentifier={require("../assets/instagramfsvgrepocom-2-1.png")}
      />
      <View style={styles.groupParent}>
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
        <SearchContainer />
      </View>
      <LoginContainer />
      <View style={styles.backParent}>
        <Text style={styles.back}>Back</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/frame-12.png")}
        />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.aboutWrapper, styles.wrapperPosition]}>
          <Text style={[styles.about, styles.aboutTypo]}>About</Text>
        </View>
        <Text style={[styles.welcomeToEventstry, styles.jioWorldGardenTypo]}>
          Welcome to Eventstry, where your dream wedding becomes a stunning
          reality! Our expert wedding planners craft unforgettable experiences
          tailored to your unique style and vision. Our comprehensive packages
          are designed to cater to all your wedding requirements, ensuring every
          detail is perfect. From venue selection to decor, catering to
          entertainment, we handle it all, so you can relax and enjoy your
          special day to the fullest. Let us bring your wedding dreams to life!
        </Text>
        <View style={[styles.component3, styles.component3Position]}>
          <Text style={styles.seeMenu}>See Menu</Text>
          <Image
            style={styles.divsCardIcon}
            contentFit="cover"
            source={require("../assets/divscardicon.png")}
          />
        </View>
        <BookingFormContainer />
        <View style={styles.groupContainer}>
          <View style={[styles.frameParent, styles.groupPosition]}>
            <View style={[styles.groupInner, styles.groupPosition]} />
            <View style={[styles.venueWrapper, styles.wrapperPosition]}>
              <Text style={[styles.about, styles.aboutTypo]}>Venue</Text>
            </View>
          </View>
          <Text
            style={[styles.jioWorldGarden, styles.jioWorldGardenTypo]}
          >{`Jio World Garden, BKC
Pt No: RG1A, G Block, Bandra Kurla Complex, Bandra East, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051`}</Text>
          <View
            style={[styles.getDirectionsWrapper, styles.component3Position]}
          >
            <Text style={[styles.getDirections, styles.aboutTypo]}>
              GET DIRECTIONS
            </Text>
          </View>
          <TermsAndConditionsContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 42,
    width: 166,
    position: "absolute",
  },
  groupPosition: {
    height: 72,
    left: 0,
    position: "absolute",
  },
  wrapperPosition: {
    paddingBottom: Padding.p_base,
    paddingTop: Padding.p_9xl,
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro,
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    width: 750,
    left: 0,
    position: "absolute",
  },
  aboutTypo: {
    color: Color.colorDarkslateblue,
    fontWeight: "800",
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    lineHeight: 28,
  },
  jioWorldGardenTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    width: 750,
    textAlign: "left",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
    left: 0,
    position: "absolute",
  },
  component3Position: {
    flexDirection: "row",
    left: 0,
    position: "absolute",
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
  groupParent: {
    width: 1440,
    height: 80,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    textAlign: "left",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    lineHeight: 28,
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 46,
    borderRadius: Border.br_3xs,
    height: 380,
    width: 750,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    width: 69,
    alignItems: "center",
    borderBottomWidth: 2.5,
    height: 72,
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
    top: 426,
  },
  about: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue,
    fontWeight: "800",
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
    fontSize: FontSize.size_base,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontWeight: "500",
  },
  divsCardIcon: {
    borderRadius: Border.br_xs,
    width: 24,
    height: 24,
    marginLeft: 8,
    overflow: "hidden",
  },
  component3: {
    top: 662,
    alignItems: "center",
  },
  groupInner: {
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
  frameParent: {
    width: 750,
    top: 0,
  },
  jioWorldGarden: {
    top: 100,
  },
  getDirections: {
    fontSize: FontSize.size_xs,
  },
  getDirectionsWrapper: {
    top: 189,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
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
    height: 1984,
    overflow: "hidden",
  },
});

export default Frame;
