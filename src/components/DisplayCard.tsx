import React, { useMemo } from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import styles from "./CardStyles";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

interface DisplayCardProps {
  propTop?: number | string;
  imageSource: any;
  price: string;
  heading: string;
  description: string;
  address: string;
}

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DisplayCard: React.FC<DisplayCardProps> = ({
  propTop,
  imageSource,
  price,
  heading,
  description,
  address,
}: DisplayCardProps) => {
  const navigation = useNavigation();
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const handleExploreNow = () => {
    navigation.navigate("ExplorePage", {
      imageSource,
      price,
      heading,
      description,
      address,
    });
  };

  return (
    <View style={[styles.frameParent, styles.groupItemLayout, frameView1Style, {position:"relative"}]}>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <Image
          style={[styles.frameChild, styles.groupChildPosition]}
          contentFit="cover"
          source={imageSource}
        />
        <View style={[styles.ellipseParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../../assets/ellipse-1695.png")}
          />
          <Text style={styles.text}>{price}</Text>
        </View>
      </View>
      <View style={styles.venue1Parent}>
        <Text style={[styles.venue1, styles.venue1Typo]}>{heading}</Text>
        <Text style={styles.letEventstryPlan}>{description}</Text>
        <View style={styles.locationPin1StreamlineCorParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/locationpin1streamlinecore.png")}
          />
          <Text style={[styles.jioWorldGarden, styles.venue1Typo]}>{address}</Text>
        </View>
      </View>
      <View style={styles.component3Parent}>
        <View style={styles.component3}></View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <Button style={[styles.groupItem, styles.groupLayout]} appearance="outlined" status="basic" onPress={handleExploreNow}>
          <Text style={[styles.exploreNow, styles.sTypo]}>Explore Now</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DisplayCard;
