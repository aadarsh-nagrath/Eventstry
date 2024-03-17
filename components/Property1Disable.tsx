import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Property1DisableType = {
  /** Style props */
  property1DisablePosition?: string;
  property1DisableBorderRadius?: number | string;
  property1DisableBackgroundColor?: string;
  property1DisableOverflow?: string;
  property1DisableFlexDirection?: string;
  property1DisablePaddingHorizontal?: number | string;
  property1DisablePaddingVertical?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Disable = ({
  property1DisablePosition,
  property1DisableBorderRadius,
  property1DisableBackgroundColor,
  property1DisableOverflow,
  property1DisableFlexDirection,
  property1DisablePaddingHorizontal,
  property1DisablePaddingVertical,
}: Property1DisableType) => {
  const property1DisableStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DisablePosition),
      ...getStyleValue("borderRadius", property1DisableBorderRadius),
      ...getStyleValue("backgroundColor", property1DisableBackgroundColor),
      ...getStyleValue("overflow", property1DisableOverflow),
      ...getStyleValue("flexDirection", property1DisableFlexDirection),
      ...getStyleValue("paddingHorizontal", property1DisablePaddingHorizontal),
      ...getStyleValue("paddingVertical", property1DisablePaddingVertical),
    };
  }, [
    property1DisablePosition,
    property1DisableBorderRadius,
    property1DisableBackgroundColor,
    property1DisableOverflow,
    property1DisableFlexDirection,
    property1DisablePaddingHorizontal,
    property1DisablePaddingVertical,
  ]);

  return (
    <View style={[styles.property1disable, property1DisableStyle]}>
      <Text style={styles.verify}>Verify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  verify: {
    fontSize: FontSize.size_sm,
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
    color: Color.colorWhite,
    textAlign: "left",
  },
  property1disable: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_200,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default Property1Disable;
