import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import TermsAndConditionsSection from "../components/TermsAndConditionsSection";
import LoginContainer from "../components/LoginContainer";
import TermsAndConditionsContainer from "../components/TermsAndConditionsContainer";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

const Frame5 = () => {
  return (
    <View style={styles.view}>
      <TermsAndConditionsSection
        uniqueIdentifier={require("../assets/instagramfsvgrepocom-2-1.png")}
        frameViewTop={1619}
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
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={[styles.search, styles.aboutTypo]}>Search</Text>
          <Image
            style={[styles.iconOutlinedSearch, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--outlined--search.png")}
          />
        </View>
      </View>
      <LoginContainer />
      <View style={styles.backParent}>
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/frame-12.png")}
        />
        <View style={[styles.groupInner, styles.frameGroupPosition]} />
        <View style={[styles.aboutWrapper, styles.wrapperPosition]}>
          <Text style={[styles.about, styles.backTypo1]}>About</Text>
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
        <View style={styles.component3}>
          <Text style={styles.seeMenu}>See Menu</Text>
          <Image
            style={[styles.divsCardIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/divscardicon.png")}
          />
        </View>
        <View style={[styles.frameParent, styles.parentLayout]}>
          <View
            style={[styles.component3Parent, styles.component3ParentBorder]}
          >
            <View style={styles.component31}>
              <Text style={styles.seeMenu}>See Menu</Text>
              <Image
                style={[styles.divsCardIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/divscardicon.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
              <View style={[styles.rectangleView, styles.rectanglePosition]} />
              <Text style={styles.bookNow}>Book now</Text>
            </View>
          </View>
          <View style={[styles.venue1Wrapper, styles.parentPosition]}>
            <Text style={[styles.venue1, styles.textTypo]}>Venue 1</Text>
          </View>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-240.png")}
            />
          </View>
          <View
            style={[styles.thingsToKeepInMindParent, styles.parentPosition]}
          >
            <Text style={[styles.thingsToKeep, styles.aboutTypo]}>
              Things to Keep in mind
            </Text>
            <Text
              style={[styles.cancellationPolicyAnd, styles.backTypo]}
            >{`Cancellation policy and payment terms
Easy access and parking
Event insurance is included
Cancellation policy and payment terms
Easy access and parking
Event insurance is included
Cancellation policy and payment terms
Easy access and parking`}</Text>
          </View>
        </View>
        <View style={styles.groupContainer}>
          <View style={[styles.frameGroup, styles.frameGroupPosition]}>
            <View style={[styles.frameView, styles.frameGroupPosition]} />
            <View style={[styles.venueWrapper, styles.wrapperPosition]}>
              <Text style={[styles.about, styles.backTypo1]}>Venue</Text>
            </View>
          </View>
          <Text
            style={[styles.jioWorldGarden, styles.jioWorldGardenTypo]}
          >{`Jio World Garden, BKC
Pt No: RG1A, G Block, Bandra Kurla Complex, Bandra East, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051`}</Text>
          <View
            style={[styles.getDirectionsWrapper, styles.component3ParentBorder]}
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
    height: 1984,
    overflow: "hidden",
  },
});

export default Frame5;
