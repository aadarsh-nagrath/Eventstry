import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NonVegSection from "../components/NonVegSection";
import { Border, Color } from "../GlobalStyles";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <View style={[styles.groupParent, styles.menuItemPosition]}>
        <NonVegSection nonVegMenuItems="Starters Non Veg" />
        <NonVegSection
          nonVegMenuItems="Main Course Non Veg"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Breads"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Rice"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Biryani Dishes"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Yogurt"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Salad"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Condiments"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Chutney"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Beverage"
          chickenTandooriChickenMarginTop={24}
        />
        <NonVegSection
          nonVegMenuItems="Dessert"
          chickenTandooriChickenMarginTop={24}
        />
      </View>
      <Image
        style={styles.menuChild}
        contentFit="cover"
        source={require("../assets/group-1261153015.png")}
      />
      <View style={[styles.menuItem, styles.menuItemPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemPosition: {
    top: 88,
    position: "absolute",
  },
  groupParent: {
    left: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  menuChild: {
    top: 24,
    left: 644,
    width: 40,
    height: 40,
    position: "absolute",
  },
  menuItem: {
    left: 692,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGainsboro,
    width: 8,
    height: 81,
  },
  menu: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 2906,
    overflow: "hidden",
  },
});

export default Menu;
