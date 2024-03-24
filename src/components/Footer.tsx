import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType, Dimensions } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize } from "../../GlobalStyles";

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

  return (
    <View style={[styles.frameParent, styles.framePosition, frameViewStyle]}>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={[styles.termsConditionsWrapper, styles.wrapperFlexBox]}>
          <Text
            style={[styles.termsConditions, styles.followUsOnTypo]}
          >{`Terms & Conditions`}</Text>
        </View>
        <Text
          style={[styles.eventstryAllRights, styles.frameContainerPosition]}
        >{`© 2024 Eventstry, All rights reserved `}</Text>
        <View style={[styles.privacyPolicyWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.termsConditions, styles.followUsOnTypo]}>
            Privacy Policy
          </Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameContainerPosition]}>
        <View style={[styles.groupWrapper, styles.groupWrapperFlexBox]}>
          <View style={styles.logo39ab30e9cd984a48cdd3b9dbbLayout}>
            <Image
              style={[
                styles.logo39ab30e9cd984a48cdd3b9dbbIcon,
                styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
              ]}
              contentFit="cover"
              source={require("../../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-1.png")}
            />
          </View>
        </View>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../../assets/vector-10.png")}
          />
          <Text style={[styles.followUsOn, styles.followUsOnTypo]}>
            Follow us on
          </Text>
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../../assets/vector-10.png")}
          />
        </View>
        <View
          style={[styles.whatsapp128SvgrepoCom1Parent, styles.parentFlexBox]}
        >
          <Image
            style={styles.whatsapp128SvgrepoCom1Icon}
            contentFit="cover"
            source={require("../../assets/whatsapp128svgrepocom-1.png")}
          />
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/vector.png")}
          />
          <Image
            style={[styles.linkedinRoundSvgrepoCom1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/linkedinroundsvgrepocom-1.png")}
          />
          <Image
            style={[styles.linkedinRoundSvgrepoCom1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/twitterroundsvgrepocom-1.png")}
          />
          <Image
            style={[styles.linkedinRoundSvgrepoCom1Icon, styles.iconLayout]}
            contentFit="cover"
            source={uniqueIdentifier}
          />
        </View>
      </View>
    </View>
  );
};

const baseStyles = StyleSheet.create({
  framePosition: {
    width: "100%",
    overflow: "hidden",
    left: 0,
    position: "absolute",
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
    left: "50%",
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
    marginLeft: -143,
    top: 19,
    letterSpacing: 0.3,
    textTransform: "capitalize",
    textAlign: "center",
    color: Color.grayGray91F2730,
    fontFamily: FontFamily.avenir,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    display: "flex"
  },
  privacyPolicyWrapper: {
    left: 222,
  },
  frameGroup: {
    top: 305,
    backgroundColor: Color.colorPeachpuff,
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
    top: "100%",
    backgroundColor: Color.colorAntiquewhite,
    height: 365,
  },

  
});

const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

if (width >=360 && width < 415  && height <= 900) {
  styles = StyleSheet.create({
    ...baseStyles,
    frameParent: {
      top: 0,
      bottom: "100%",
      backgroundColor: Color.colorAntiquewhite,
      height: 365,
    },
    eventstryAllRights:{
      display:"none"
    }
  });
}


export default Footer;
