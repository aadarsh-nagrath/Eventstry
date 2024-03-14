import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type CategorySortContainerType = {
  filterOptionLabel?: string;

  /** Style props */
  propMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CategorySortContainer = ({
  filterOptionLabel,
  propMarginLeft,
}: CategorySortContainerType) => {
  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={styles.frameWrapper}>
      <View style={styles.selectCategoryParent}>
        <Text style={styles.selectCategory}>{filterOptionLabel}</Text>
        <Image
          style={[styles.vectorIcon, vectorIconStyle]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectCategory: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.avenir,
    color: Color.colorBlack,
    textAlign: "left",
  },
  vectorIcon: {
    width: 14,
    height: 8,
    marginLeft: 38,
  },
  selectCategoryParent: {
    height: 19,
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue,
    borderWidth: 1,
    width: 210,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_smi,
    marginLeft: 16,
  },
});

export default CategorySortContainer;
