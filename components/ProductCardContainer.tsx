import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

export type ProductCardContainerType = {
  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProductCardContainer = ({ propMarginTop }: ProductCardContainerType) => {
  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.groupParent, frameView4Style]}>
      <View style={styles.vanilla05kg550Parent}>
        <Text style={styles.vanilla05kgContainer}>
          <Text style={styles.vanilla05kg}>{`Vanilla - 0.5Kg
`}</Text>
          <Text style={styles.text}>₹550/-</Text>
        </Text>
        <View style={styles.polygonParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/polygon-1.png")}
          />
          <Image
            style={styles.image18Icon}
            contentFit="cover"
            source={require("../assets/image-18.png")}
          />
        </View>
      </View>
      <View style={styles.frameItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  vanilla05kg: {
    color: Color.grayGray91F2730,
  },
  text: {
    color: Color.colorTomato,
  },
  vanilla05kgContainer: {
    top: "30.16%",
    left: "53.79%",
    fontSize: FontSize.size_lg,
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    top: -20,
    left: -46,
    width: 277,
    height: 267,
    position: "absolute",
  },
  image18Icon: {
    top: 15,
    left: 9,
    width: 107,
    height: 95,
    position: "absolute",
  },
  polygonParent: {
    height: "100%",
    width: "47.73%",
    top: "0%",
    right: "52.27%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: Color.colorAntiquewhite,
    position: "absolute",
    overflow: "hidden",
  },
  vanilla05kg550Parent: {
    width: 264,
    height: 126,
  },
  frameItem: {
    borderRadius: Border.br_9xs_2,
    borderColor: Color.colorGray_200,
    borderWidth: 0.8,
    width: 30,
    height: 30,
    marginLeft: 281,
    borderStyle: "solid",
  },
  groupParent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    width: 617,
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
    borderStyle: "solid",
  },
});

export default ProductCardContainer;
