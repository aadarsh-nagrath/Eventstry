import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import CategorySortContainer from "./CategorySortContainer";
import LoginContainer from "./LoginContainer";
import SearchContainer from "./SearchContainer";
import PriceContainer from "./PriceContainer";
import PriceFilterContainer1 from "./PriceFilterContainer1";
import PriceFilterContainer from "./PriceFilterContainer";
import TermsAndConditionsSection from "./TermsAndConditionsSection";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={[styles.view, styles.groupLayout]}>
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameBorder]}>
          <View style={styles.enterCityParent}>
            <Text style={[styles.enterCity, styles.enterCityTypo]}>
              Enter City
            </Text>
            <Image
              style={styles.arrowDown1StreamlineStreaIcon}
              contentFit="cover"
              source={require("../assets/arrowdown1streamlinestreamline30.png")}
            />
          </View>
        </View>
        <CategorySortContainer filterOptionLabel="Select Category" />
        <CategorySortContainer
          filterOptionLabel="Sort By Price"
          propMarginLeft={60}
        />
      </View>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View
        style={[styles.findThePerfectCelebrationFParent, styles.findLayout]}
      >
        <Text style={[styles.findThePerfect, styles.findLayout]}>
          Find the perfect celebration for your perfect occasion
        </Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
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
        <LoginContainer />
        <SearchContainer />
      </View>
      <LinearGradient
        style={[styles.frameGroup, styles.groupLayout]}
        locations={[0, 0.81]}
        colors={["#f4e9e3", "rgba(255, 255, 255, 0)"]}
      >
        <PriceContainer />
        <PriceFilterContainer1 />
        <PriceFilterContainer />
        <PriceContainer propTop={564} />
        <View style={[styles.frameContainer, styles.groupItemLayout1]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-1000006087.png")}
          />
          <View style={styles.venue2Parent}>
            <Text style={[styles.venue2, styles.venue2Typo]}>Venue 2</Text>
            <Text style={[styles.letEventstryPlan, styles.venue2Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View style={styles.locationPin1StreamlineCorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue2Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.component3Parent}>
            <View style={styles.component3}>
              <Text style={[styles.seeMenu, styles.seeMenuTypo]}>See Menu</Text>
              <Image
                style={[styles.divsCardIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/divscardicon1.png")}
              />
            </View>
            <View style={[styles.rectangleParent, styles.groupItemLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Text style={[styles.exploreNow, styles.seeMenuTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <PriceFilterContainer propTop={564} />
        <PriceContainer propTop={1105} />
        <PriceFilterContainer1 propTop={1105} />
        <PriceFilterContainer propTop={1105} />
      </LinearGradient>
      <TermsAndConditionsSection
        uniqueIdentifier={require("../assets/instagramfsvgrepocom-2-11.png")}
        frameViewTop={2018}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 1440,
    overflow: "hidden",
  },
  frameBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  enterCityTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  findLayout: {
    width: 745,
    position: "absolute",
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 42,
    width: 166,
    position: "absolute",
  },
  groupItemLayout1: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  venue2Typo: {
    color: Color.grayGray91F2730,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  seeMenuTypo: {
    fontFamily: FontFamily.trap,
    textTransform: "capitalize",
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 48,
    width: 388,
  },
  enterCity: {
    lineHeight: 22,
    color: Color.colorBlack,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_base,
  },
  arrowDown1StreamlineStreaIcon: {
    width: 18,
    height: 18,
    marginLeft: 79,
    overflow: "hidden",
  },
  enterCityParent: {
    width: 174,
    height: 19,
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    borderRadius: Border.br_7xl,
    borderColor: Color.colorDarkslateblue,
    width: 210,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_smi,
  },
  frameParent: {
    top: 307,
    left: 708,
    flexDirection: "row",
    position: "absolute",
  },
  child: {
    top: 111,
    left: -151,
    width: 749,
    height: 749,
    position: "absolute",
  },
  findThePerfect: {
    top: 35,
    fontSize: 56,
    lineHeight: 60,
    color: Color.colorDarkslateblue,
    fontWeight: "800",
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  groupChild: {
    left: 5,
    width: 36,
    height: 26,
    top: 0,
    position: "absolute",
  },
  findThePerfectCelebrationFParent: {
    top: 112,
    height: 155,
    left: 70,
  },
  logo39ab30e9cd984a48cdd3b9dbbIcon: {
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  logo39ab30e9cd984a48cdd3b9dbbWrapper: {
    top: 19,
    left: 70,
  },
  groupParent: {
    height: 80,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    height: 220,
    width: 388,
    overflow: "hidden",
  },
  venue2: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
  },
  letEventstryPlan: {
    marginTop: 16,
    width: 388,
    fontSize: FontSize.size_base,
    color: Color.grayGray91F2730,
  },
  jioWorldGarden: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    width: 356,
    marginLeft: 8,
  },
  locationPin1StreamlineCorParent: {
    justifyContent: "center",
    marginTop: 16,
    flexDirection: "row",
  },
  venue2Parent: {
    height: 149,
    marginTop: 16,
  },
  seeMenu: {
    textDecoration: "underline",
    color: Color.colorDarkslateblue,
  },
  divsCardIcon: {
    borderRadius: Border.br_xs,
    marginLeft: 8,
  },
  component3: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupItem: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_8xs,
    position: "absolute",
    top: 0,
    left: 0,
  },
  exploreNow: {
    top: 15,
    left: 145,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 16,
  },
  component3Parent: {
    marginTop: 16,
    alignItems: "center",
  },
  frameContainer: {
    top: 564,
    left: 510,
    borderColor: Color.colorSienna,
    height: 521,
    padding: Padding.p_base,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  frameGroup: {
    top: 369,
    height: 1649,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  view: {
    height: 2383,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: 1440,
  },
});

export default Frame3;
