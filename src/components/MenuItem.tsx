import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
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

const styles = StyleSheet.create({
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

export default MenuItem;
