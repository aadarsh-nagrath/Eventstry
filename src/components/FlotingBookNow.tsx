import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Padding, Color, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

export type FooterType = {
  uniqueIdentifier?: ImageSourcePropType;
  /** Style props */
  frameViewTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Footer = ({
  uniqueIdentifier,
  frameViewTop,
}: FooterType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", frameViewTop),
    };
  }, [frameViewTop]);
    const route = useRoute<{ params: { imageSource: string, price: number, heading: string, description: string, address: string } } & { key: string, name: string }>();
  const { imageSource, price, heading, description, address } = route.params;

  const navigation = useNavigation(); 
  const handleSeeMenuClick = () => {
    navigation.navigate('SeeMenu', {
        imageSource,
        price,
        heading,
        description,
        address
    });
};

  return (
    <View style={[styles.frameParent, styles.framePosition, frameViewStyle]}>
        <TouchableOpacity style={{marginTop: -100, marginLeft: -360}} onPress={handleSeeMenuClick} >
      <View style={[styles.frameGroup, styles.frameP]}>
        <Text
          style={[styles.eventstryAllRights, styles.frameContainerPosition]}
        >{`Book Now`}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: "98%",
    overflow: "hidden",
    left: 10,
    position: "absolute",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
  },
  frameP: {
    width: 320,
    overflow: "hidden",
    left: 20,
    position: "absolute",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    top: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  followUsOnTypo: {
    textAlign: "center",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
  },
  frameContainerPosition: {
    left: "38%",
    position: "absolute",
  },
  groupWrapperFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 65,
    width: 256,
  },
  frameLayout: {
    width: 101,
    maxHeight: "100%",
  },
  parentFlexBox: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    marginLeft: 16,
    height: 40,
    width: 40,
  },
  termsConditions: {
    lineHeight: 28,
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  termsConditionsWrapper: {
    left: 60,
    borderStyle: "solid",
    borderColor: Color.grayGray91F2730,
    borderRightWidth: 1,
  },
  eventstryAllRights: {
    top: 19,
    letterSpacing: 0.3,
    textTransform: "capitalize",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  privacyPolicyWrapper: {
    left: 222,
  },
  frameGroup: {
    top: 15,
    backgroundColor: Color.colorDarkslateblue,
    height: 60,
    overflow: "hidden",
  },
  logo39ab30e9cd984a48cdd3b9dbbIcon: {
    top: 0,
    overflow: "hidden",
    left: 0,
    position: "absolute",
    width: 256,
  },
  groupWrapper: {
    padding: Padding.p_11xl,
    justifyContent: "center",
    overflow: "hidden",
  },
  followUsOn: {
    fontSize: FontSize.size_xl,
    marginLeft: 8,
    lineHeight: 28,
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
  },
  frameItem: {
    marginLeft: 8,
  },
  whatsapp128SvgrepoCom1Icon: {
    height: 40,
    width: 40,
    overflow: "hidden",
  },
  linkedinRoundSvgrepoCom1Icon: {
    overflow: "hidden",
  },
  whatsapp128SvgrepoCom1Parent: {
    justifyContent: "center",
  },
  frameContainer: {
    marginLeft: -166,
    top: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: "40%",
    backgroundColor: Color.colorWhite,
    height: 85,
  },
});

export default Footer;
