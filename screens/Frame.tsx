import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import TermsAndConditionsSection from "../components/TermsAndConditionsSection";
import SearchContainer from "../components/SearchContainer";
import LoginContainer from "../components/LoginContainer";
import BookingFormContainer from "../components/BookingFormContainer";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

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
          <Text style={[styles.about, styles.aboutClr]}>About</Text>
        </View>
        <Text style={[styles.welcomeToEventstry, styles.pleaseCarryATypo]}>
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
              <Text style={[styles.about, styles.aboutClr]}>Venue</Text>
            </View>
          </View>
          <Text
            style={[styles.jioWorldGarden, styles.pleaseCarryATypo]}
          >{`Jio World Garden, BKC
Pt No: RG1A, G Block, Bandra Kurla Complex, Bandra East, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051`}</Text>
          <View
            style={[styles.getDirectionsWrapper, styles.component3Position]}
          >
            <Text style={[styles.getDirections, styles.aboutClr]}>
              GET DIRECTIONS
            </Text>
          </View>
          <View style={styles.groupView}>
            <View style={[styles.frameGroup, styles.frameGroupPosition]}>
              <View style={[styles.frameView, styles.frameViewPosition]} />
              <View
                style={[
                  styles.termsConditionsWrapper,
                  styles.frameViewPosition,
                ]}
              >
                <Text
                  style={[styles.termsConditionsContainer, styles.aboutClr]}
                >
                  <Text style={styles.text}>-</Text>
                  <Text
                    style={styles.termsConditions}
                  >{` Terms & Conditions`}</Text>
                </Text>
              </View>
            </View>
            <Text
              style={[styles.pleaseCarryA, styles.frameGroupPosition]}
            >{`Please carry a valid ID proof along with you.
No refunds on purchased ticket are possible, even in case of any rescheduling.
Security procedures, including frisking remain the right of the management.
No dangerous or potentially hazardous objects including but not limited to weapons, knives, guns, fireworks, helmets, lazer devices, bottles, musical instruments will be allowed in the venue and may be ejected with or without the owner from the venue.
The sponsors/performers/organizers are not responsible for any injury or damage occurring due to the event. Any claims regarding the same would be settled in courts in Mumbai.
People in an inebriated state may not be allowed entry.
Organizers hold the right to deny late entry to the event.
Venue rules apply.`}</Text>
          </View>
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
  },
  aboutClr: {
    color: Color.colorDarkslateblue,
    textAlign: "left",
    lineHeight: 28,
  },
  pleaseCarryATypo: {
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
  },
  component3Position: {
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameGroupPosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  frameViewPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    alignItems: "center",
    borderStyle: "solid",
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
    lineHeight: 28,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
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
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
    top: 426,
  },
  about: {
    fontWeight: "800",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_xl,
  },
  aboutWrapper: {
    alignItems: "center",
    borderStyle: "solid",
    top: 426,
    width: 750,
    left: 0,
    position: "absolute",
  },
  welcomeToEventstry: {
    top: 526,
    width: 750,
    left: 0,
    position: "absolute",
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
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
    top: 0,
  },
  venueWrapper: {
    alignItems: "center",
    borderStyle: "solid",
    width: 750,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    width: 750,
    top: 0,
  },
  jioWorldGarden: {
    top: 100,
    width: 750,
    left: 0,
    position: "absolute",
  },
  getDirections: {
    fontSize: 12,
    fontWeight: "800",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.avenir,
  },
  getDirectionsWrapper: {
    top: 189,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 4,
    borderColor: Color.colorDarkslateblue,
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
  },
  frameView: {
    width: "30.8%",
    right: "69.2%",
    borderBottomWidth: 2.5,
    borderColor: Color.colorDarkslateblue,
  },
  text: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
  },
  termsConditions: {
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
  },
  termsConditionsContainer: {
    fontSize: FontSize.size_5xl,
  },
  termsConditionsWrapper: {
    right: "0%",
    paddingBottom: Padding.p_base,
    paddingTop: Padding.p_9xl,
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro,
    flexDirection: "row",
    width: "100%",
  },
  frameGroup: {
    height: "13.85%",
    bottom: "86.15%",
    right: "0%",
    top: "0%",
    left: "0%",
  },
  pleaseCarryA: {
    top: "19.23%",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
  },
  groupView: {
    top: 265,
    height: 520,
    width: 750,
    left: 0,
    position: "absolute",
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
    height: 1984,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
