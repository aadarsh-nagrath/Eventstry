import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import CategorySortContainer from "./CategorySortContainer";
import LoginContainer from "./LoginContainer";
import SearchContainer from "./SearchContainer";
import PriceContainer from "./PriceContainer";
import PriceFilterContainer1 from "./PriceFilterContainer1";
import TermsAndConditionsSection from "./TermsAndConditionsSection";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={[styles.view, styles.groupLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <View style={styles.enterCityParent}>
            <Text style={[styles.enterCity, styles.textTypo]}>Enter City</Text>
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
        <View style={[styles.frameContainer, styles.frameBorder1]}>
          <View style={[styles.rectangleParent, styles.frameLayout]}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-611.png")}
            />
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
            />
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={styles.image20Icon}
              contentFit="cover"
              source={require("../assets/image-20.png")}
            />
          </View>
          <View style={styles.venue3Parent}>
            <Text style={[styles.venue3, styles.venue3Typo]}>Venue 3</Text>
            <Text style={[styles.letEventstryPlan, styles.venue3Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View style={styles.locationPin1StreamlineCorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore1.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue3Typo]}>
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
                source={require("../assets/divscardicon2.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text style={[styles.exploreNow, styles.seeMenuTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <PriceContainer propTop={564} />
        <View style={[styles.frameView, styles.frameBorder]}>
          <Image
            style={[styles.rectangleParent, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-1000006087.png")}
          />
          <View style={styles.venue3Parent}>
            <Text style={[styles.venue3, styles.venue3Typo]}>Venue 2</Text>
            <Text style={[styles.letEventstryPlan, styles.venue3Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View style={styles.locationPin1StreamlineCorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue3Typo]}>
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
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text style={[styles.exploreNow, styles.seeMenuTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.frameBorder]}>
          <View style={[styles.rectangleParent, styles.frameLayout]}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-611.png")}
            />
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
            />
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={styles.image20Icon}
              contentFit="cover"
              source={require("../assets/image-20.png")}
            />
          </View>
          <View style={styles.venue3Parent}>
            <Text style={[styles.venue3, styles.venue3Typo]}>Venue 3</Text>
            <Text style={[styles.letEventstryPlan, styles.venue3Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View style={styles.locationPin1StreamlineCorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore1.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue3Typo]}>
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
                source={require("../assets/divscardicon2.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text style={[styles.exploreNow, styles.seeMenuTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <PriceContainer propTop={1105} />
        <PriceFilterContainer1 propTop={1105} />
        <View style={[styles.frameParent2, styles.frameBorder1]}>
          <View style={[styles.rectangleParent, styles.frameLayout]}>
            <Image
              style={[styles.frameChild, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-611.png")}
            />
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
            />
            <View style={[styles.ellipseParent, styles.groupItemLayout]}>
              <Image
                style={[styles.groupItem, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={styles.image20Icon}
              contentFit="cover"
              source={require("../assets/image-20.png")}
            />
          </View>
          <View style={styles.venue3Parent}>
            <Text style={[styles.venue3, styles.venue3Typo]}>Venue 3</Text>
            <Text style={[styles.letEventstryPlan, styles.venue3Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View style={styles.locationPin1StreamlineCorParent}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore1.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue3Typo]}>
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
                source={require("../assets/divscardicon2.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text style={[styles.exploreNow, styles.seeMenuTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
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
  textTypo: {
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
  frameBorder1: {
    padding: Padding.p_base,
    borderColor: Color.colorSienna,
    borderRadius: Border.br_8xs,
    left: 950,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameLayout: {
    height: 220,
    width: 388,
  },
  groupItemLayout: {
    height: 120,
    width: 120,
    position: "absolute",
  },
  venue3Typo: {
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
  rectangleLayout: {
    height: 48,
    width: 388,
  },
  frameBorder: {
    top: 564,
    padding: Padding.p_base,
    borderColor: Color.colorSienna,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  enterCity: {
    lineHeight: 22,
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.avenir,
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
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
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
    fontSize: FontSize.size_37xl,
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
    borderRadius: 9,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    borderRadius: 10,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 0,
    left: 0,
  },
  text: {
    top: "13.33%",
    left: "22.5%",
    fontSize: FontSize.size_xl,
    color: Color.colorTomato,
    fontWeight: "800",
    position: "absolute",
  },
  ellipseParent: {
    top: 168,
    left: 262,
  },
  frameInner: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  image20Icon: {
    top: -90,
    left: -112,
    width: 612,
    height: 400,
    position: "absolute",
  },
  rectangleParent: {
    overflow: "hidden",
  },
  venue3: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
  },
  letEventstryPlan: {
    marginTop: 16,
    width: 388,
    color: Color.grayGray91F2730,
    fontSize: FontSize.size_base,
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
  venue3Parent: {
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
  rectangleView: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_8xs,
    height: 48,
    top: 0,
    left: 0,
    position: "absolute",
  },
  exploreNow: {
    top: 15,
    left: 145,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 16,
  },
  component3Parent: {
    marginTop: 16,
    alignItems: "center",
  },
  frameContainer: {
    top: 23,
  },
  frameView: {
    left: 510,
    height: 521,
  },
  frameParent1: {
    left: 950,
    top: 564,
  },
  frameParent2: {
    top: 1105,
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
