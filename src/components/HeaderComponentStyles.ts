import { Dimensions, StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
  logo39ab30e9cd984a48cdd3b9dbbWrapper: {
    top: 19,
    left: 70,
  },
  logo39ab30e9cd984a48cdd3b9dbbLayout: {
    height: 42,
    width: 166,
    position: "absolute",
  },
  groupLayout: {
    width: 1440,
    overflow: "hidden",
  },
  groupParent: {
    height: 80,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  logo39ab30e9cd984a48cdd3b9dbbIcon: {
    top: 0,
    left: 8,
    overflow: "hidden",
  },
});


const { width, height } = Dimensions.get("window");
let styles = { ...baseStyles };

if (width >=360 && width < 415  && height <= 900) {
  styles = StyleSheet.create({
    ...baseStyles,
    groupLayout: {
      width: 365,
      overflow: "hidden",
    },
  });
}

export default styles;
