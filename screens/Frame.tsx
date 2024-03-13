import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.frameParent, styles.frameGroupPosition]}>
        <View style={[styles.frameGroup, styles.frameGroupPosition]}>
          <View style={[styles.termsConditionsWrapper, styles.wrapperFlexBox]}>
            <Text
              style={[styles.termsConditions, styles.followUsOnTypo]}
            >{`Terms & Conditions`}</Text>
          </View>
          <Text
            style={[styles.eventstryAllRights, styles.seeMenuTypo]}
          >{`© 2024 Eventstry, All rights reserved `}</Text>
          <View style={[styles.privacyPolicyWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.termsConditions, styles.followUsOnTypo]}>
              Privacy Policy
            </Text>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.groupWrapper}>
            <View style={styles.logo39ab30e9cd984a48cdd3b9dbbLayout1}>
              <Image
                style={[
                  styles.logo39ab30e9cd984a48cdd3b9dbbIcon,
                  styles.logo39ab30e9cd984a48cdd3b9dbbLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-1.png")}
              />
            </View>
          </View>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.frameLayout}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
            <Text style={[styles.followUsOn, styles.followUsOnTypo]}>
              Follow us on
            </Text>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/vector-10.png")}
            />
          </View>
          <View
            style={[styles.whatsapp128SvgrepoCom1Parent, styles.parentFlexBox]}
          >
            <Image
              style={[
                styles.whatsapp128SvgrepoCom1Icon,
                styles.frameInnerLayout,
              ]}
              contentFit="cover"
              source={require("../assets/whatsapp128svgrepocom-1.png")}
            />
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Image
              style={[styles.linkedinRoundSvgrepoCom1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/linkedinroundsvgrepocom-1.png")}
            />
            <Image
              style={[styles.linkedinRoundSvgrepoCom1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/twitterroundsvgrepocom-1.png")}
            />
            <Image
              style={[styles.linkedinRoundSvgrepoCom1Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/instagramfsvgrepocom-2-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.groupParent, styles.frameGroupPosition]}>
        <View
          style={[
            styles.logo39ab30e9cd984a48cdd3b9dbbContainer,
            styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
          ]}
        >
          <Image
            style={[
              styles.logo39ab30e9cd984a48cdd3b9dbbIcon1,
              styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
            ]}
            contentFit="cover"
            source={require("../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-2.png")}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={styles.search}>Search</Text>
          <Image
            style={[styles.iconOutlinedSearch, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--outlined--search.png")}
          />
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.groupLayout1}>
          <View style={[styles.groupItem, styles.groupBorder]} />
          <Text style={[styles.signIn, styles.signPosition]}>Sign in</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout1]}>
          <View style={[styles.groupInner, styles.groupInnerBg]} />
          <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
        </View>
      </View>
      <View style={styles.backParent}>
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame-12.png")}
        />
        <View style={[styles.frameView, styles.framePosition]} />
        <View style={[styles.aboutWrapper, styles.wrapperPosition]}>
          <Text style={styles.about}>About</Text>
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
        <View style={styles.component3}>
          <Text style={[styles.seeMenu, styles.seeMenuTypo]}>See Menu</Text>
          <Image
            style={[styles.divsCardIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/divscardicon.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupFrame, styles.groupLayout]}>
            <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
              <View style={[styles.rectangleView, styles.rectanglePosition]} />
              <Text style={[styles.bookNow, styles.signUpTypo]}>Book now</Text>
            </View>
          </View>
          <View style={[styles.venue1Wrapper, styles.parentPosition]}>
            <Text style={[styles.venue1, styles.textTypo]}>Venue 1</Text>
          </View>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            <Image
              style={[styles.frameInner, styles.frameInnerLayout]}
              contentFit="cover"
              source={require("../assets/group-240.png")}
            />
          </View>
          <View
            style={[styles.thingsToKeepInMindParent, styles.parentPosition]}
          >
            <Text style={styles.thingsToKeep}>Things to Keep in mind</Text>
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
        <View style={styles.groupParent1}>
          <View style={[styles.frameParent1, styles.framePosition]}>
            <View style={[styles.groupChild1, styles.framePosition]} />
            <View style={[styles.venueWrapper, styles.wrapperPosition]}>
              <Text style={styles.about}>Venue</Text>
            </View>
          </View>
          <Text
            style={[styles.jioWorldGarden, styles.pleaseCarryATypo]}
          >{`Jio World Garden, BKC
Pt No: RG1A, G Block, Bandra Kurla Complex, Bandra East, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051`}</Text>
          <View style={[styles.getDirectionsWrapper, styles.groupBorder]}>
            <Text style={styles.getDirections}>GET DIRECTIONS</Text>
          </View>
          <View style={styles.groupParent2}>
            <View style={[styles.frameParent2, styles.frameParent2Position]}>
              <View style={[styles.groupChild2, styles.groupChild2Position]} />
              <View
                style={[
                  styles.termsConditionsContainer,
                  styles.groupChild2Position,
                ]}
              >
                <Text style={styles.termsConditionsContainer1}>
                  <Text style={styles.text1}>-</Text>
                  <Text
                    style={styles.termsConditions1}
                  >{` Terms & Conditions`}</Text>
                </Text>
              </View>
            </View>
            <Text
              style={[styles.pleaseCarryA, styles.frameParent2Position]}
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
  frameGroupPosition: {
    width: 1440,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    top: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  followUsOnTypo: {
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.avenir,
  },
  seeMenuTypo: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout1: {
    height: 65,
    width: 256,
  },
  frameLayout: {
    width: 101,
    maxHeight: "100%",
  },
  parentFlexBox: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  frameInnerLayout: {
    height: 40,
    width: 40,
  },
  iconLayout1: {
    marginLeft: 16,
    height: 40,
    width: 40,
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 42,
    width: 166,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  signPosition: {
    left: 48,
    lineHeight: 22,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: 16,
  },
  groupLayout1: {
    height: 54,
    width: 150,
  },
  groupInnerBg: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  signUpTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    position: "absolute",
  },
  backTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  framePosition: {
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
  pleaseCarryATypo: {
    lineHeight: 24,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_base,
  },
  groupLayout: {
    height: 480,
    width: 420,
    position: "absolute",
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
  frameParent2Position: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild2Position: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    alignItems: "center",
    borderStyle: "solid",
    position: "absolute",
  },
  termsConditions: {
    fontWeight: "500",
    lineHeight: 28,
    fontSize: FontSize.size_base,
  },
  termsConditionsWrapper: {
    left: 60,
    borderColor: Color.colorGray_100,
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  eventstryAllRights: {
    marginLeft: -143,
    letterSpacing: 0.3,
    left: "50%",
    top: 19,
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.avenir,
    position: "absolute",
  },
  privacyPolicyWrapper: {
    left: 222,
  },
  frameGroup: {
    top: 305,
    backgroundColor: Color.colorPeachpuff,
    height: 60,
  },
  logo39ab30e9cd984a48cdd3b9dbbIcon: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupWrapper: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  followUsOn: {
    marginLeft: 8,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    lineHeight: 28,
  },
  frameItem: {
    marginLeft: 8,
  },
  whatsapp128SvgrepoCom1Icon: {
    overflow: "hidden",
  },
  linkedinRoundSvgrepoCom1Icon: {
    overflow: "hidden",
  },
  whatsapp128SvgrepoCom1Parent: {
    justifyContent: "center",
  },
  frameContainer: {
    marginLeft: -166,
    top: 40,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameParent: {
    top: 1619,
    backgroundColor: "#fde1d2",
    height: 365,
  },
  logo39ab30e9cd984a48cdd3b9dbbIcon1: {
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  logo39ab30e9cd984a48cdd3b9dbbContainer: {
    left: 70,
    top: 19,
  },
  groupChild: {
    top: -2,
    left: -2,
    borderRadius: 36,
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
    color: "#83878c",
    textAlign: "left",
    lineHeight: 22,
    fontFamily: FontFamily.avenir,
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
    height: 80,
    top: 0,
  },
  groupItem: {
    borderColor: Color.colorDarkslateblue,
    borderWidth: 1,
    position: "absolute",
    borderRadius: Border.br_3xs,
    height: 54,
    width: 150,
    top: 0,
  },
  signIn: {
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    position: "absolute",
  },
  groupInner: {
    height: 54,
    width: 150,
    left: 0,
    position: "absolute",
  },
  signUp: {
    left: 48,
    lineHeight: 22,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    top: 16,
  },
  rectangleContainer: {
    marginLeft: 28,
  },
  groupContainer: {
    top: 13,
    left: 1042,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  back: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 0,
    fontWeight: "500",
    lineHeight: 28,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 380,
    width: 750,
    top: 46,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameView: {
    width: 69,
    borderBottomWidth: 2.5,
    borderColor: Color.colorDarkslateblue,
    top: 426,
    alignItems: "center",
    borderStyle: "solid",
  },
  about: {
    fontWeight: "800",
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.avenir,
    lineHeight: 28,
  },
  aboutWrapper: {
    top: 426,
    alignItems: "center",
    borderStyle: "solid",
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
    fontFamily: FontFamily.trap,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  divsCardIcon: {
    borderRadius: 12,
    marginLeft: 8,
  },
  component3: {
    top: 662,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
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
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    left: "50%",
  },
  rectangleParent1: {
    top: 381,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
  },
  groupFrame: {
    backgroundColor: "#fef9f6",
    borderColor: Color.colorPeachpuff,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    borderRadius: Border.br_3xs,
    top: 0,
    overflow: "hidden",
  },
  venue1: {
    color: Color.colorDarkslateblue,
    fontWeight: "500",
    lineHeight: 28,
  },
  venue1Wrapper: {
    paddingHorizontal: 0,
    paddingVertical: 20,
    width: 388,
    borderBottomWidth: 1,
    left: 16,
    borderColor: Color.colorDarkslateblue,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
  },
  text: {
    color: "#f35d38",
    fontWeight: "800",
  },
  frameInner: {
    marginLeft: 244,
  },
  parent: {
    top: 84,
    alignItems: "center",
    flexDirection: "row",
  },
  thingsToKeep: {
    fontSize: 18,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
  },
  cancellationPolicyAnd: {
    marginTop: 8,
    width: 388,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  thingsToKeepInMindParent: {
    top: 148,
    width: 388,
  },
  groupView: {
    left: 790,
    top: 46,
  },
  groupChild1: {
    width: 93,
    borderBottomWidth: 2.5,
    borderColor: Color.colorDarkslateblue,
    top: 0,
    alignItems: "center",
    borderStyle: "solid",
  },
  venueWrapper: {
    width: 750,
    top: 0,
    alignItems: "center",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameParent1: {
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
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    lineHeight: 28,
  },
  getDirectionsWrapper: {
    top: 189,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: Color.colorDarkslateblue,
    borderWidth: 1,
    position: "absolute",
    flexDirection: "row",
    overflow: "hidden",
  },
  groupChild2: {
    width: "30.8%",
    right: "69.2%",
    borderBottomWidth: 2.5,
    borderColor: Color.colorDarkslateblue,
  },
  text1: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
  },
  termsConditions1: {
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
  },
  termsConditionsContainer1: {
    fontSize: 24,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    lineHeight: 28,
  },
  termsConditionsContainer: {
    right: "0%",
    paddingBottom: Padding.p_base,
    paddingTop: Padding.p_9xl,
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro,
    flexDirection: "row",
    width: "100%",
  },
  frameParent2: {
    height: "13.85%",
    bottom: "86.15%",
    right: "0%",
    top: "0%",
    left: "0%",
  },
  pleaseCarryA: {
    top: "19.23%",
    lineHeight: 24,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_base,
  },
  groupParent2: {
    top: 265,
    height: 520,
    width: 750,
    left: 0,
    position: "absolute",
  },
  groupParent1: {
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
