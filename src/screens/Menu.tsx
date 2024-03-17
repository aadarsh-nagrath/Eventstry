import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import MenuItem from "../components/MenuItem";
import { Border, Color } from "../../GlobalStyles";

const Menu = ({closeModal}) => {
  return (
    <View style={styles.menu}>
      <View style={[styles.groupParent, styles.menuItemPosition]}>
        <MenuItem MenuItems="Starters Non Veg" />
        <MenuItem
          MenuItems="Main Course Non Veg"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Breads"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Rice"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Biryani Dishes"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Yogurt"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Salad"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Condiments"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Chutney"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Beverage"
          ItemMarginTop={24}
        />
        <MenuItem
          MenuItems="Dessert"
          ItemMarginTop={24}
        />
      </View>
      <TouchableOpacity onPress={closeModal}>
      <Image
        style={styles.menuChild}
        contentFit="cover"
        source={require("../../assets/group-1261153015@3x.png")}
      />
      </TouchableOpacity>
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
    // borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGainsboro,
    width: 8,
    height: 81,
  },
  menu: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 2906,
  },
});

export default Menu;
