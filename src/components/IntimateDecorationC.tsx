import React, { useMemo, useState } from "react";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../../GlobalStyles";


export type IntimateDecorationContainerType = {
  decorationTypeText?: string;
  decorationPriceText?: string;
  decorationCostText?: string;

  /** Style props */
  propTop?: number | string;
};

const RectangleRadioButton = ({ selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.rectangleView, styles.frameChildLayout, styles2.radioButton]}>
      {selected && <View style={styles2.radioButtonInner} />}
    </TouchableOpacity>
  );
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

  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={[styles.frameParent, styles.frameBorder, frameView3Style]}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../../assets/frame-20.png")}
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
      <RectangleRadioButton selected={isChecked} onSelect={handlePress} />
    </View>
  );
};

const baseStyles = StyleSheet.create({
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
  frameChildLayout: {
    height: 30,
    width: 30,
    borderRadius: Border.br_9xs_2,
    borderWidth: 0.8,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
  },
  rectangleView: {
    left: 555,
    top: "40%",
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

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    borderWidth: 2,
    borderColor: "#01235b",
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    backgroundColor: "#01235b",
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: "#01235b",
  },
});

const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

if (width >=360 && width < 415  && height <= 900) {
  styles = StyleSheet.create({
    ...baseStyles,
    frameParent: {
      top: 73,
      left: 15,
      borderRadius: Border.br_3xs,
      borderWidth: 1,
      width: 305,
      flexDirection: "row",
      alignItems: "center",
      padding: Padding.p_base,
      overflow: "hidden",
      position: "absolute",
    },
    frameChild: {
      borderRadius: 8,
      width: 134,
      height: 164,
      marginLeft: -5,
      overflow: "hidden",
    },
    intimateOurIntimateDecoratiWrapper: {
      width: 155,
      height: 181,
      marginLeft: 10,
    },
    ourIntimateDecorations: {
      fontWeight: "500",
      color: Color.grayGray91F2730,
      fontFamily: FontFamily.avenir,
      fontSize: 13
    },
  });
}


export default IntimateDecorationC;
