import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import IntimateDecorationContainer from "../components/IntimateDecorationC";
import ProductCardContainer from "../components/ProductCardContainer";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Frame6 = () => {
  return (
    <View style={styles.view}>
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
            source={require("../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-2@3x.png")}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={[styles.search, styles.pleaseContainerTypo]}>
            Search
          </Text>
          <Image
            style={[styles.iconOutlinedSearch, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/icon--outlined--search@3x.png")}
          />
        </View>
      </View>
      <View style={styles.fcompo} />;
      <View style={[styles.rectangleGroup, styles.groupLayout2]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.proceedToPayment, styles.textTypo2]}>
          Proceed to Payment
        </Text>
      </View>
      <View style={styles.inner}>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.groupInner, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/vector-3971@3x.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/vector-3971@3x.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/vector-3971@3x.png")}
          />
          <View style={[styles.ellipseParent, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1696@3x.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.ellipseGroup, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1697@3x.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>2</Text>
          </View>
          <View style={[styles.ellipseContainer, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1697@3x.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.groupView, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1697@3x.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>4</Text>
          </View>
          <Image
            style={[styles.groupChild5, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/vector-3971@3x.png")}
          />
          <View style={[styles.ellipseParent1, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1697@3x.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>5</Text>
          </View>
          <Image
            style={[styles.groupChild7, styles.groupChildLayout1]}
            contentFit="cover"
            source={require("../assets/vector-3971@3x.png")}
          />
          <View style={[styles.ellipseParent2, styles.groupChildLayout1]}>
            <Image
              style={[styles.ellipseParent, styles.groupChildLayout1]}
              contentFit="cover"
              source={require("../assets/ellipse-1697@3x.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>6</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.pleaseSelectTheEventDateParent,
          styles.addParentShadowBox,
        ]}
      >
        <Text
          style={[styles.pleaseSelectTheContainer, styles.addContainerTypo]}
        >
          <Text style={styles.pleaseSelectThe}>
            Please select the event date
          </Text>
          <Text style={styles.text6}>*</Text>
        </Text>
        <View style={[styles.groupContainer, styles.frameViewPosition]}>
          <View style={styles.ddmmyyyyWrapper}>
            <Text style={[styles.ddmmyyyy, styles.ddmmyyyyTypo]}>
              DD/MM/YYYY
            </Text>
          </View>
          <Image
            style={styles.iconOutlinedCalendar}
            contentFit="cover"
            source={require("../assets/icon--outlined--calendar@3x.png")}
          />
        </View>
        <Text style={[styles.pleaseSelectAContainer, styles.addContainerTypo]}>
          <Text style={styles.pleaseSelectThe}>Please select a event time</Text>
          <Text style={styles.text6}>*</Text>
        </Text>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <View style={styles.ddmmyyyyWrapper}>
            <Text style={[styles.ddmmyyyy, styles.ddmmyyyyTypo]}>
              DD/MM/YYYY
            </Text>
          </View>
          <Image
            style={styles.iconOutlinedCalendar}
            contentFit="cover"
            source={require("../assets/circleclockstreamlinecore@3x.png")}
          />
        </View>
        <Text style={[styles.pleaseEnterTheContainer, styles.addContainerTypo]}>
          <Text style={styles.pleaseSelectThe}>
            Please enter the number of people
          </Text>
          <Text style={styles.text6}>*</Text>
        </Text>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.text9, styles.pleaseContainerTypo]}>25</Text>
          </View>
          <View style={styles.ellipseParent3}>
            <Image
              style={[styles.groupChild9, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1700@3x.png")}
            />
            <Text style={[styles.text10, styles.addContainerTypo]}>+</Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-1261153004@3x.png")}
          />
        </View>
        <View
          style={[
            styles.informationCircleStreamlineParent,
            styles.parentPosition,
          ]}
        >
          <Image
            style={styles.informationCircleStreamlineIcon}
            contentFit="cover"
            source={require("../assets/informationcirclestreamlinemicro@3x.png")}
          />
          <Text style={[styles.maximum25People, styles.ddmmyyyyTypo]}>
            Maximum 25 people are allowed in this event
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.pleaseSelectOneOfThePackaParent,
          styles.addParentShadowBox,
        ]}
      >
        <Text style={[styles.pleaseSelectOne, styles.addContainerTypo]}>
          Please select one of the packages
        </Text>
        <View style={styles.frameGroup}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={styles.groupParent1}>
              <View
                style={[
                  styles.nonVegStarters2VegStartWrapper,
                  styles.containerPosition,
                ]}
              >
                <Text
                  style={[
                    styles.nonVegStartersContainer,
                    styles.containerPosition,
                  ]}
                >
                  <Text
                    style={[styles.nonVegStarters, styles.pleaseContainerTypo]}
                  >{`2 Non Veg Starters + 2 Veg Starters + 2 Veg Main Course + 1 Non Veg Main Course
`}</Text>
                  <Text style={[styles.text11, styles.textTypo2]}>
                    ₹1,000/-
                  </Text>
                </Text>
              </View>
              <View style={[styles.rectangleView, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={[styles.groupFrame, styles.groupLayout]}>
            <View style={styles.groupParent1}>
              <View
                style={[
                  styles.nonVegStarters2VegStartWrapper,
                  styles.containerPosition,
                ]}
              >
                <Text
                  style={[
                    styles.nonVegStartersContainer,
                    styles.containerPosition,
                  ]}
                >
                  <Text
                    style={[styles.nonVegStarters, styles.pleaseContainerTypo]}
                  >{`2 Non Veg Starters + 2 Veg Starters + 2 Veg Main Course + 1 Non Veg Main Course
`}</Text>
                  <Text style={[styles.text11, styles.textTypo2]}>
                    ₹1,000/-
                  </Text>
                </Text>
              </View>
              <View style={[styles.rectangleView, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={[styles.groupFrame, styles.groupLayout]}>
            <View style={styles.groupParent1}>
              <View
                style={[
                  styles.nonVegStarters2VegStartWrapper,
                  styles.containerPosition,
                ]}
              >
                <Text
                  style={[
                    styles.nonVegStartersContainer,
                    styles.containerPosition,
                  ]}
                >
                  <Text
                    style={[styles.nonVegStarters, styles.pleaseContainerTypo]}
                  >{`2 Non Veg Starters + 2 Veg Starters + 2 Veg Main Course + 1 Non Veg Main Course
`}</Text>
                  <Text style={[styles.text11, styles.textTypo2]}>
                    ₹1,000/-
                  </Text>
                </Text>
              </View>
              <View style={[styles.rectangleView, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={[styles.groupFrame, styles.groupLayout]}>
            <View style={styles.groupParent1}>
              <View
                style={[
                  styles.nonVegStarters2VegStartWrapper,
                  styles.containerPosition,
                ]}
              >
                <Text
                  style={[
                    styles.nonVegStartersContainer,
                    styles.containerPosition,
                  ]}
                >
                  <Text
                    style={[styles.nonVegStarters, styles.pleaseContainerTypo]}
                  >{`2 Non Veg Starters + 2 Veg Starters + 2 Veg Main Course + 1 Non Veg Main Course
`}</Text>
                  <Text style={[styles.text11, styles.textTypo2]}>
                    ₹1,000/-
                  </Text>
                </Text>
              </View>
              <View style={[styles.rectangleView, styles.frameChildLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.component3, styles.component3Position]}>
          <Text style={[styles.seeMenu, styles.addContainerTypo]}>
            See Menu
          </Text>
          <Image
            style={[styles.divsCardIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/divscardicon3@3x.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.whatKindOfDecorationWouldParent,
          styles.addParentShadowBox,
        ]}
      >
        <Text style={[styles.whatKindOf, styles.addContainerTypo]}>
          What kind of decoration would you like?
        </Text>
        <IntimateDecorationContainer
          decorationTypeText={`Intimate
`}
          decorationPriceText="Our intimate decorations start at ₹6,000."
          decorationCostText="₹6,000/-"
        />
        <IntimateDecorationContainer
          decorationTypeText={`Just Perfect
`}
          decorationPriceText="Our medium decorations start at ₹15,000."
          decorationCostText="₹15,000/-"
          propTop={325}
        />
        <IntimateDecorationContainer
          decorationTypeText={`Let’s Go All Out!
`}
          decorationPriceText="Our premium decorations start at ₹25,000."
          decorationCostText="₹25,000/-"
          propTop={577}
        />
      </View>
      <View style={[styles.groupParent5, styles.wrapperFlexBox]}>
        <View style={styles.groupChildLayout}>
          <View style={[styles.groupChild13, styles.groupChildLayout]} />
          <Text style={[styles.signIn, styles.signTypo]}>Sign in</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
          <View style={[styles.groupChild14, styles.groupChildLayout]} />
          <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChild13Border]}>
        <Image
          style={[styles.frameChild, styles.frameParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1550@3x.png")}
        />
        <View style={[styles.frameContainer, styles.frameParentLayout]}>
          <View style={[styles.venue1Wrapper, styles.frameParentLayout]}>
            <Text style={[styles.venue1, styles.pleaseContainerTypo]}>
              Venue 1
            </Text>
          </View>
          <View style={[styles.container, styles.groupParentFlexBox]}>
            <Text style={[styles.text15, styles.textTypo2]}>₹8,900</Text>
          </View>
          <View style={[styles.aboutParent, styles.frameParentLayout]}>
            <Text style={[styles.about, styles.addContainerTypo]}>About</Text>
            <Text style={styles.jioWorldGardenTypo}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
          </View>
          <View style={[styles.venueParent, styles.frameParentLayout]}>
            <Text style={[styles.about, styles.addContainerTypo]}>Venue</Text>
            <Text style={[styles.jioWorldGarden, styles.jioWorldGardenTypo]}>
              Jio World Garden, BKC, Pt No: RG1A, G Block, Bandra Kurla Complex,
              Bandra East, G Block BKC, Bandra Kurla Complex, Bandra East,
              Mumbai, Maharashtra - 400051
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.addACakeParent, styles.addParentShadowBox]}>
        <Text style={[styles.addACake, styles.addContainerTypo]}>
          Add a Cake
        </Text>
        <View style={[styles.frameParent1, styles.component3Position]}>
          <ProductCardContainer />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
          <ProductCardContainer propMarginTop={16} />
        </View>
      </View>
      <View style={[styles.addAPhotographerParent, styles.addParentShadowBox]}>
        <Text style={[styles.addAPhotographer, styles.addContainerTypo]}>
          Add a Photographer
        </Text>
        <View style={[styles.frameParent1, styles.component3Position]}>
          <View style={[styles.groupParent6, styles.groupLayout1]}>
            <View style={styles.yesWrapper}>
              <Text style={[styles.yes, styles.containerPosition]}>Yes</Text>
            </View>
            <View style={[styles.frameItem, styles.frameChildLayout]} />
          </View>
          <View style={[styles.groupParent7, styles.groupLayout]}>
            <View style={styles.noWrapper}>
              <Text style={[styles.yes, styles.containerPosition]}>No</Text>
            </View>
            <View style={[styles.frameInner, styles.frameChildLayout]} />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.whatKindOfEntertainmentWouParent,
          styles.addParentShadowBox,
        ]}
      >
        <Text style={[styles.whatKindOf1, styles.addContainerTypo]}>
          What kind of Entertainment would you like?
        </Text>
        <View style={[styles.frameParent1, styles.component3Position]}>
          <View style={[styles.groupParent6, styles.groupLayout1]}>
            <View style={styles.liveMusic8900Wrapper}>
              <Text
                style={[
                  styles.liveMusic8900Container,
                  styles.containerPosition,
                ]}
              >
                <Text style={styles.liveMusic}>{`Live Music
`}</Text>
                <Text style={styles.text16}>₹8,900/-</Text>
              </Text>
            </View>
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
          </View>
          <View style={[styles.groupParent7, styles.groupLayout]}>
            <View style={styles.magician8900Wrapper}>
              <Text
                style={[
                  styles.liveMusic8900Container,
                  styles.containerPosition,
                ]}
              >
                <Text style={styles.liveMusic}>{`Magician
`}</Text>
                <Text style={styles.text16}>₹8,900/-</Text>
              </Text>
            </View>
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
          </View>
          <View style={[styles.groupParent7, styles.groupLayout]}>
            <View style={styles.caricatureArtist8900Wrapper}>
              <Text
                style={[
                  styles.liveMusic8900Container,
                  styles.containerPosition,
                ]}
              >
                <Text style={styles.liveMusic}>{`Caricature Artist
`}</Text>
                <Text style={styles.text16}>₹8,900/-</Text>
              </Text>
            </View>
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
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
  pleaseContainerTypo: {
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
  },
  groupIconLayout: {
    height: 24,
    width: 24,
  },
  groupLayout2: {
    height: 62,
    width: 530,
    left: "50%",
  },
  groupPosition: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  textTypo2: {
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
  },
  groupChildLayout1: {
    height: 40,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    position: "absolute",
  },
  addParentShadowBox: {
    width: 750,
    shadowOpacity: 1,
    elevation: 24,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    left: 180,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  addContainerTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  frameViewPosition: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_base,
    height: 51,
    width: 345,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0.8,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_8xs,
    left: 357,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  ddmmyyyyTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.avenir,
  },
  parentPosition: {
    top: 164,
    height: 40,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupLayout1: {
    padding: Padding.p_base,
    width: 617,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  containerPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 30,
    width: 30,
    borderRadius: Border.br_9xs_2,
    borderWidth: 0.8,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
  },
  groupLayout: {
    marginTop: 16,
    padding: Padding.p_base,
    width: 617,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  component3Position: {
    top: 73,
    position: "absolute",
  },
  groupChildLayout: {
    height: 54,
    width: 150,
  },
  signTypo: {
    left: 48,
    top: 16,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChild13Border: {
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
  },
  frameParentLayout: {
    width: 388,
    position: "absolute",
  },
  groupParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  jioWorldGardenTypo: {
    marginTop: 8,
    width: 388,
    color: Color.grayGray91F2730,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_base,
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
    textAlign: "left",
    color: Color.colorGray_200,
    lineHeight: 22,
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_base,
    left: 24,
    position: "absolute",
  },
  iconOutlinedSearch: {
    top: 10,
    left: 363,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 18,
    width: 411,
    height: 44,
    left: 515,
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
  groupItem: {
    marginLeft: -265,
    height: 62,
    width: 530,
    left: "50%",
  },
  proceedToPayment: {
    marginLeft: -95,
    top: "29.03%",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: -430,
    top: 3706,
    position: "absolute",
  },
  groupInner: {
    top: 40,
    maxWidth: "100%",
    left: 20,
    height: 40,
    overflow: "hidden",
  },
  vectorIcon: {
    top: 120,
    maxWidth: "100%",
    left: 20,
    height: 40,
    overflow: "hidden",
  },
  groupChild1: {
    top: 200,
    maxWidth: "100%",
    left: 20,
    height: 40,
    overflow: "hidden",
  },
  ellipseParent: {
    width: 40,
    left: 0,
    top: 0,
  },
  text: {
    left: 14,
    top: 6,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
  },
  text1: {
    left: 14,
    top: 6,
    fontWeight: "900",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorGray_200,
  },
  ellipseGroup: {
    top: 80,
    width: 40,
    left: 0,
  },
  ellipseContainer: {
    top: 160,
    width: 40,
    left: 0,
  },
  groupView: {
    top: 240,
    width: 40,
    left: 0,
  },
  groupChild5: {
    top: 280,
    maxWidth: "100%",
    left: 20,
    height: 40,
    overflow: "hidden",
  },
  ellipseParent1: {
    top: 320,
    width: 40,
    left: 0,
  },
  groupChild7: {
    top: 360,
    maxWidth: "100%",
    left: 20,
    height: 40,
    overflow: "hidden",
  },
  ellipseParent2: {
    top: 400,
    width: 40,
    left: 0,
  },
  vectorParent: {
    top: 30,
    left: 25,
    height: 440,
    width: 40,
    position: "absolute",
  },
  inner: {
    width: 90,
    height: 499,
    top: 126,
    left: 70,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseSelectThe: {
    color: Color.grayGray91F2730,
  },
  text6: {
    color: Color.colorRed,
  },
  pleaseSelectTheContainer: {
    top: 37,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    left: 24,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  ddmmyyyy: {
    left: "0%",
    top: "0%",
    position: "absolute",
    fontWeight: "500",
    width: "100%",
  },
  ddmmyyyyWrapper: {
    width: 313,
    height: 19,
  },
  iconOutlinedCalendar: {
    width: 20,
    height: 20,
    marginLeft: -22,
    overflow: "hidden",
  },
  groupContainer: {
    top: 24,
  },
  pleaseSelectAContainer: {
    top: 104,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    left: 24,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  frameView: {
    top: 91,
  },
  pleaseEnterTheContainer: {
    top: 171,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    left: 24,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  text9: {
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.avenir,
  },
  wrapper: {
    left: 36,
    width: 70,
    padding: Padding.p_5xs,
    borderWidth: 0.8,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    height: 40,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    top: 0,
    overflow: "hidden",
  },
  groupChild9: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  text10: {
    left: 6,
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    position: "absolute",
    color: Color.colorWhite,
    top: 0,
  },
  ellipseParent3: {
    top: 7,
    height: 25,
    width: 24,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 8,
    left: 118,
    position: "absolute",
  },
  frameParent: {
    width: 142,
    top: 164,
    left: 357,
  },
  informationCircleStreamlineIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  maximum25People: {
    lineHeight: 20,
    width: 157,
    marginLeft: 8,
  },
  informationCircleStreamlineParent: {
    borderLeftWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    flexDirection: "row",
    top: 164,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    left: 515,
  },
  pleaseSelectTheEventDateParent: {
    height: 233,
    borderColor: Color.colorDarkslateblue,
    top: 126,
  },
  pleaseSelectOne: {
    marginLeft: -138,
    top: 24,
    color: Color.grayGray91F2730,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    position: "absolute",
  },
  nonVegStarters: {
    color: Color.grayGray91F2730,
  },
  text11: {
    color: Color.colorTomato,
  },
  nonVegStartersContainer: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    width: "100%",
  },
  nonVegStarters2VegStartWrapper: {
    height: "100%",
    width: "88.03%",
    right: "11.97%",
    bottom: "0%",
  },
  rectangleView: {
    left: 555,
    top: 0,
    position: "absolute",
  },
  groupParent1: {
    width: 585,
    height: 75,
  },
  groupWrapper: {
    borderColor: Color.colorGainsboro,
  },
  groupFrame: {
    borderColor: Color.colorGainsboro,
  },
  frameGroup: {
    top: 121,
    left: 67,
    position: "absolute",
  },
  seeMenu: {
    textDecoration: "underline",
    textTransform: "capitalize",
    fontFamily: FontFamily.trap,
    color: Color.colorDarkslateblue,
    fontWeight: "500",
  },
  divsCardIcon: {
    borderRadius: Border.br_xs,
    marginLeft: 8,
    overflow: "hidden",
  },
  component3: {
    left: 565,
    alignItems: "center",
    flexDirection: "row",
  },
  pleaseSelectOneOfThePackaParent: {
    top: 387,
    height: 621,
    borderColor: Color.colorGainsboro,
  },
  whatKindOf: {
    marginLeft: -165,
    top: 24,
    color: Color.grayGray91F2730,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    position: "absolute",
  },
  whatKindOfDecorationWouldParent: {
    top: 1036,
    height: 837,
    borderColor: Color.colorGainsboro,
  },
  groupChild13: {
    borderWidth: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
    borderColor: Color.colorDarkslateblue,
    left: 0,
    top: 0,
  },
  signIn: {
    color: Color.colorDarkslateblue,
  },
  groupChild14: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    left: 0,
  },
  signUp: {
    color: Color.colorWhite,
  },
  rectangleParent1: {
    marginLeft: 28,
  },
  groupParent5: {
    top: 13,
    left: 1042,
  },
  frameChild: {
    height: 180,
    left: 16,
    width: 388,
    top: 16,
    borderRadius: Border.br_3xs,
  },
  venue1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    color: Color.colorDarkslateblue,
    textAlign: "left",
  },
  venue1Wrapper: {
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  text15: {
    fontSize: 28,
    color: Color.colorTomato,
    textAlign: "left",
  },
  container: {
    top: 76,
    left: 0,
    position: "absolute",
  },
  about: {
    color: Color.colorDarkslateblue,
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
  },
  aboutParent: {
    top: 138,
    left: 0,
  },
  jioWorldGarden: {
    lineHeight: 24,
  },
  venueParent: {
    top: 239,
    left: 0,
  },
  frameContainer: {
    top: 196,
    height: 368,
    left: 16,
    width: 388,
  },
  rectangleParent2: {
    left: 950,
    backgroundColor: Color.colorSnow,
    borderColor: Color.colorPeachpuff,
    width: 420,
    height: 596,
    top: 126,
    overflow: "hidden",
  },
  addACake: {
    marginLeft: -48,
    top: 24,
    color: Color.grayGray91F2730,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    position: "absolute",
  },
  frameParent1: {
    left: 66,
  },
  addACakeParent: {
    top: 1901,
    height: 1077,
    borderColor: Color.colorGainsboro,
  },
  addAPhotographer: {
    marginLeft: -84,
    top: 24,
    color: Color.grayGray91F2730,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    position: "absolute",
  },
  yes: {
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
  },
  yesWrapper: {
    width: 29,
    height: 25,
  },
  fcompo: {
    position: "absolute",
    top: 82,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 1440,
    height: 4039,
    overflow: "hidden",
  },
  frameItem: {
    marginLeft: 516,
  },
  groupParent6: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_200,
    overflow: "hidden",
  },
  noWrapper: {
    width: 26,
    height: 25,
  },
  frameInner: {
    marginLeft: 519,
  },
  groupParent7: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.colorGray_200,
    overflow: "hidden",
  },
  addAPhotographerParent: {
    top: 3006,
    height: 237,
    borderColor: Color.colorGainsboro,
  },
  whatKindOf1: {
    marginLeft: -173,
    top: 24,
    color: Color.grayGray91F2730,
    left: "50%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    position: "absolute",
  },
  liveMusic: {
    color: Color.colorDarkslateblue,
  },
  text16: {
    color: Color.colorTomato,
  },
  liveMusic8900Container: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
  },
  liveMusic8900Wrapper: {
    width: 88,
    height: 50,
  },
  frameChild1: {
    marginLeft: 457,
  },
  magician8900Wrapper: {
    width: 76,
    height: 50,
  },
  frameChild2: {
    marginLeft: 469,
  },
  caricatureArtist8900Wrapper: {
    width: 139,
    height: 50,
  },
  frameChild3: {
    marginLeft: 406,
  },
  whatKindOfEntertainmentWouParent: {
    top: 3271,
    height: 375,
    borderColor: Color.colorGainsboro,
  },
  view: {
    flex: 1,
    height: 4121,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame6;
