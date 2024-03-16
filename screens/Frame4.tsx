import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import TermsAndConditionsSection from "../components/TermsAndConditionsSection";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Frame4 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.frameParent}>
        <View style={styles.frameBorder}>
          <View style={[styles.enterCityParent, styles.parentFlexBox]}>
            <Text style={[styles.enterCity, styles.textTypo]}>Enter City</Text>
            <Image
              style={styles.arrowDown1StreamlineStreaIcon}
              contentFit="cover"
              source={require("../assets/arrowdown1streamlinestreamline30.png")}
            />
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.pricingParent, styles.parentFlexBox]}>
            <Text style={[styles.enterCity, styles.textTypo]}>Pricing</Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameBorder]}>
          <View style={[styles.pricingParent, styles.parentFlexBox]}>
            <Text style={[styles.enterCity, styles.textTypo]}>
              Sort By Price
            </Text>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View style={styles.findThePerfectCelebrationFParent}>
        <Text style={[styles.findThePerfect, styles.signInClr]}>
          Find the perfect celebration for your perfect occasion
        </Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/arrow-11.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupPosition]}>
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
        <View style={[styles.groupContainer, styles.groupContainerFlexBox]}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
            <Text style={[styles.signIn, styles.signPosition]}>Sign in</Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={styles.groupInner} />
            <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
          </View>
        </View>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangleView} />
          <Text style={[styles.search, styles.textTypo]}>Search</Text>
          <Image
            style={[styles.iconOutlinedSearch, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--outlined--search.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={[styles.frameGroup, styles.groupPosition]}
        locations={[0, 0.81]}
        colors={["#f4e9e3", "rgba(255, 255, 255, 0)"]}
      >
        <View style={[styles.frameParent1, styles.frameParentBorder2]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-58.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 1</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.frameParentLayout]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-61.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 2</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.frameParentBorder2]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-611.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={[styles.frameChild2, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
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
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 3</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore1.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent4, styles.frameParentBorder1]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-58.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 1</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent5, styles.frameParentBorder1]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-61.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 2</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent6, styles.frameParentBorder1]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-611.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={[styles.frameChild2, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
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
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 3</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore1.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent7, styles.frameParentBorder]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-58.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 1</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent8, styles.frameParentBorder]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-61.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 2</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent9, styles.frameParentBorder]}>
          <View style={[styles.rectangleParent1, styles.frameChildLayout]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-611.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
            <Image
              style={[styles.frameChild2, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-62.png")}
            />
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
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
            <View style={[styles.ellipseParent, styles.ellipseLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-1695.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>₹8,900</Text>
            </View>
          </View>
          <View style={styles.venue1Parent}>
            <Text style={[styles.venue1, styles.venue1Typo]}>Venue 3</Text>
            <Text style={[styles.letEventstryPlan, styles.venue1Typo]}>
              Let Eventstry plan your dream wedding for a day filled with joy,
              food, and love!
            </Text>
            <View
              style={[
                styles.locationPin1StreamlineCorParent,
                styles.groupContainerFlexBox,
              ]}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/locationpin1streamlinecore1.png")}
              />
              <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>
                Jio World Garden, Bandra Kurla Complex (BKC), Bandra East,
                Mumbai, Maharashtra 400051
              </Text>
            </View>
          </View>
          <View style={styles.groupWrapper}>
            <View style={styles.groupView}>
              <View style={styles.groupChild1} />
              <Text style={[styles.exploreNow, styles.signUpTypo]}>
                Explore Now
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <TermsAndConditionsSection
        uniqueIdentifier={require("../assets/instagramfsvgrepocom-2-11.png")}
        frameViewTop={1898}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    height: 19,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  frameBorder: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_5xl,
    width: 210,
    borderRadius: Border.br_7xl,
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  vectorIconLayout: {
    height: 8,
    width: 14,
  },
  signInClr: {
    color: Color.colorDarkslateblue,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    width: 1440,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 42,
    width: 166,
    position: "absolute",
  },
  groupContainerFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  groupItemPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  signPosition: {
    left: 48,
    top: 16,
    fontFamily: FontFamily.avenir,
    lineHeight: 22,
  },
  groupLayout: {
    height: 54,
    width: 150,
  },
  signUpTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  frameParentBorder2: {
    padding: Padding.p_base,
    borderColor: Color.colorSienna,
    top: 23,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameChildLayout: {
    height: 220,
    width: 388,
  },
  ellipseLayout: {
    height: 120,
    width: 120,
    position: "absolute",
  },
  venue1Typo: {
    color: Color.grayGray91F2730,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  frameParentLayout: {
    height: 481,
    left: 510,
  },
  frameParentBorder1: {
    top: 524,
    padding: Padding.p_base,
    borderColor: Color.colorSienna,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameParentBorder: {
    top: 1025,
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
    color: Color.colorBlack,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    textAlign: "left",
  },
  arrowDown1StreamlineStreaIcon: {
    width: 18,
    height: 18,
    marginLeft: 79,
    overflow: "hidden",
  },
  enterCityParent: {
    width: 174,
    alignItems: "center",
  },
  vectorIcon: {
    marginLeft: 97,
  },
  pricingParent: {
    alignItems: "center",
  },
  frameContainer: {
    marginLeft: 16,
  },
  vectorIcon1: {
    marginLeft: 60,
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
    fontWeight: "800",
    left: 0,
    width: 745,
    fontFamily: FontFamily.avenir,
    color: Color.colorDarkslateblue,
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
    width: 745,
    left: 70,
    position: "absolute",
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
  groupItem: {
    height: 54,
    width: 150,
    borderWidth: 1,
    borderColor: Color.colorDarkslateblue,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  signIn: {
    color: Color.colorDarkslateblue,
    textAlign: "left",
    position: "absolute",
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  groupInner: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_3xs,
    height: 54,
    width: 150,
    top: 0,
    left: 0,
    position: "absolute",
  },
  signUp: {
    left: 48,
    top: 16,
    fontFamily: FontFamily.avenir,
    lineHeight: 22,
  },
  rectangleGroup: {
    marginLeft: 28,
  },
  groupContainer: {
    top: 13,
    left: 1042,
    alignItems: "center",
    position: "absolute",
  },
  rectangleView: {
    top: -2,
    left: -2,
    borderRadius: Border.br_16xl_5,
    borderColor: Color.colorGainsboro,
    borderWidth: 2,
    width: 415,
    height: 48,
    borderStyle: "solid",
    position: "absolute",
  },
  search: {
    top: 11,
    left: 24,
    color: Color.colorGray_200,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    textAlign: "left",
    position: "absolute",
  },
  iconOutlinedSearch: {
    top: 10,
    left: 363,
    position: "absolute",
  },
  rectangleContainer: {
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
  frameChild: {
    borderRadius: 9,
    top: 0,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
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
  rectangleParent1: {
    overflow: "hidden",
  },
  venue1: {
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
    marginTop: 16,
  },
  venue1Parent: {
    height: 149,
    marginTop: 16,
  },
  groupChild1: {
    width: 388,
    borderRadius: Border.br_8xs,
    height: 48,
    backgroundColor: Color.colorDarkslateblue,
    top: 0,
    left: 0,
    position: "absolute",
  },
  exploreNow: {
    top: 15,
    left: 145,
    textTransform: "capitalize",
    fontFamily: FontFamily.trap,
  },
  groupView: {
    width: 388,
    height: 48,
  },
  groupWrapper: {
    marginTop: 16,
    alignItems: "center",
  },
  frameParent1: {
    left: 70,
  },
  frameInner: {
    borderRadius: 10,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameParent2: {
    padding: Padding.p_base,
    borderColor: Color.colorSienna,
    top: 23,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameChild2: {
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
  frameParent3: {
    left: 950,
  },
  frameParent4: {
    left: 70,
  },
  frameParent5: {
    height: 481,
    left: 510,
  },
  frameParent6: {
    left: 950,
  },
  frameParent7: {
    left: 70,
  },
  frameParent8: {
    height: 481,
    left: 510,
  },
  frameParent9: {
    left: 950,
  },
  frameGroup: {
    top: 369,
    height: 1529,
    backgroundColor: "transparent",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 2263,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame4;
