import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

export type IntimateDecorationContainerType = {
  decorationTypeText?: string;
  decorationPriceText?: string;
  decorationCostText?: string;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const IntimateDecorationC = ({
  decorationTypeText,
  decorationPriceText,
  decorationCostText,
  propTop,
}: IntimateDecorationContainerType) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frameParent, styles.frameBorder, frameView3Style]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/frame-20@3x.png")}
      />
      <View style={styles.intimateOurIntimateDecoratiWrapper}>
        <Text style={styles.intimateOurIntimateContainer}>
          <Text style={[styles.intimate, styles.textTypo]}>
            {decorationTypeText}
          </Text>
          <Text style={styles.ourIntimateDecorationsStart}>
            <Text style={styles.ourIntimateDecorations}>
              {decorationPriceText}
            </Text>
            <Text style={[styles.text, styles.textTypo]}>{` `}</Text>
            <Text
              style={styles.ourIntimateDecorations}
            >{`This pricing won’t be added to total yet and will be done once you finalise your perfect decor.
`}</Text>
            <Text style={[styles.text, styles.textTypo]}>
              {decorationCostText}
            </Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.frameItem, styles.frameBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameBorder: {
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
  },
  textTypo: {
    fontWeight: "800",
    fontFamily: FontFamily.avenir,
  },
  frameChild: {
    borderRadius: 8,
    width: 204,
    height: 204,
    overflow: "hidden",
  },
  intimate: {
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.avenir,
  },
  ourIntimateDecorations: {
    fontWeight: "500",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
  },
  text: {
    color: Color.colorTomato,
    fontFamily: FontFamily.avenir,
  },
  ourIntimateDecorationsStart: {
    fontSize: FontSize.size_lg,
  },
  intimateOurIntimateContainer: {
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  intimateOurIntimateDecoratiWrapper: {
    width: 287,
    height: 181,
    marginLeft: 24,
  },
  frameItem: {
    borderRadius: Border.br_9xs_2,
    borderWidth: 0.8,
    width: 30,
    height: 30,
    marginLeft: 24,
  },
  frameParent: {
    marginLeft: -308,
    top: 73,
    left: "50%",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    width: 617,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_base,
    overflow: "hidden",
    position: "absolute",
  },
});

export default IntimateDecorationC;
