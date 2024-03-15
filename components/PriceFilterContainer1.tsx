import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

export type PriceFilterContainer1Type = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PriceFilterContainer1 = ({ propTop }: PriceFilterContainer1Type) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frameParent, styles.groupItemLayout, frameView2Style]}>
      <View style={[styles.rectangleParent, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-581.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <View style={[styles.ellipseParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1695.png")}
          />
          <Text style={styles.text}>₹8,900</Text>
        </View>
      </View>
      <View style={styles.venue2Parent}>
        <Text style={[styles.venue2, styles.venue2Typo]}>Venue 2</Text>
        <Text style={styles.letEventstryPlan}>
          Let Eventstry plan your dream wedding for a day filled with joy, food,
          and love!
        </Text>
        <View style={styles.locationPin1StreamlineCorParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/locationpin1streamlinecore.png")}
          />
          <Text style={[styles.jioWorldGarden, styles.venue2Typo]}>
            Jio World Garden, Bandra Kurla Complex (BKC), Bandra East, Mumbai,
            Maharashtra 400051
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
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.exploreNow, styles.seeMenuTypo]}>
            Explore Now
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  frameLayout: {
    height: 220,
    width: 388,
  },
  frameItemPosition: {
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 120,
    width: 120,
    position: "absolute",
  },
  venue2Typo: {
    color: Color.grayGray91F2730,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  seeMenuTypo: {
    fontFamily: FontFamily.trap,
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupLayout: {
    height: 48,
    width: 388,
  },
  frameChild: {
    borderRadius: 9,
    height: 220,
    width: 388,
    position: "absolute",
  },
  frameItem: {
    borderRadius: 10,
    height: 220,
    width: 388,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  text: {
    top: "13.33%",
    left: "22.5%",
    fontSize: FontSize.size_xl,
    color: Color.colorTomato,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    fontWeight: "800",
    position: "absolute",
  },
  ellipseParent: {
    top: 168,
    left: 262,
  },
  rectangleParent: {
    overflow: "hidden",
  },
  venue2: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    color: Color.grayGray91F2730,
  },
  letEventstryPlan: {
    fontSize: FontSize.size_base,
    color: Color.grayGray91F2730,
    marginTop: 16,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    width: 388,
  },
  jioWorldGarden: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    width: 356,
    marginLeft: 8,
  },
  locationPin1StreamlineCorParent: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 16,
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
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
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
    alignItems: "center",
    marginTop: 16,
  },
  frameParent: {
    top: 23,
    left: 510,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorSienna,
    borderWidth: 1,
    height: 521,
    padding: Padding.p_base,
    overflow: "hidden",
  },
});

export default PriceFilterContainer1;
