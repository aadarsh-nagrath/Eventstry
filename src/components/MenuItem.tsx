import React, { useMemo } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../../GlobalStyles";

export type MenuItemType = {
  MenuItems?: string;

  /** Style props */
  ItemMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MenuItem = ({
  MenuItems,
  ItemMarginTop,
}: MenuItemType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", ItemMarginTop),
    };
  }, [ItemMarginTop]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={styles.groupChild} />
      <Text
        style={[styles.chickenTandooriChicken, styles.chickenTypo]}
      >{`Chicken Tandoori
Chicken 65
Chicken Malai Tikka
Chicken Momos
Chicken Spring Rolls`}</Text>
      <Text style={[styles.startersNonVeg, styles.chickenTypo]}>
        {MenuItems}
      </Text>
      <Text
        style={[styles.afghaniChickenChicken, styles.chickenTypo]}
      >{`Afghani Chicken
Chicken Lollipop
Chicken Manchurian
Chicken Pakora
Chicken Sheekh Kebabs`}</Text>
    </View>
  );
};

const baseStyles = StyleSheet.create({
  chickenTypo: {
    textAlign: "left",
    fontFamily: FontFamily.avenir,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    position: "absolute",
    height: 230,
    width: 660,
  },
  chickenTandooriChicken: {
    left: "4.24%",
    color: Color.grayGray91F2730,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    top: "33.48%",
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  startersNonVeg: {
    marginLeft: -302,
    top: 28,
    left: "50%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  afghaniChickenChicken: {
    left: "48.33%",
    color: Color.grayGray91F2730,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    top: "33.48%",
    textAlign: "left",
    fontFamily: FontFamily.avenir,
  },
  rectangleParent: {
    height: 230,
    width: 660,
  },
});

const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

if (width >=360 && width < 415 ) {
  styles = StyleSheet.create({
    ...baseStyles,
    groupChild: {
      top: 0,
      left: 0,
      borderRadius: Border.br_3xs,
      borderStyle: "solid",
      borderColor: Color.colorGainsboro,
      borderWidth: 1,
      position: "absolute",
      height: 160,
      width: 330,
      marginLeft: 10
    },
    rectangleParent: {
      height: 160,
      width: 330,
      marginLeft: 150,
    },
    chickenTandooriChicken: {
      left: "7.24%",
      color: Color.grayGray91F2730,
      fontWeight: "500",
      fontSize: 13,
      top: "39.48%",
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    startersNonVeg: {
      marginLeft: -132,
      top: 28,
      left: "50%",
      fontSize: 20,
      fontWeight: "800",
      color: Color.colorDarkslateblue,
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
    afghaniChickenChicken: {
      left: "56.33%",
      color: Color.grayGray91F2730,
      fontWeight: "500",
      fontSize: 13,
      top: "39.48%",
      textAlign: "left",
      fontFamily: FontFamily.avenir,
    },
  });
}

export default MenuItem;
