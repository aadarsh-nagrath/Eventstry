import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from "../screens/SeeMenuStyles";

const RectangleRadioButton = ({ selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.rectangleView, styles.frameChildLayout, styles2.radioButton]}>
      {selected && <View style={styles2.radioButtonInner} />}
    </TouchableOpacity>
  );
};


const StarterComponent = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handlePress = () => {
      setIsChecked(!isChecked);
    };

  return (
    <View style={[styles.groupFrame, styles.groupLayout]}>
      <View style={styles.groupParent1}>
        <View
          style={[
            styles.nonVegStarters2VegStartWrapper,
            styles.containerPosition,
          ]}
        >
          <Text
            style={[
              styles.nonVegStartersContainer,
              styles.containerPosition,
            ]}
          >
            <Text
              style={[styles.nonVegStarters, styles.pleaseContainerTypo]}
            >{`2 Non Veg Starters + 2 Veg Starters + 2 Veg Main Course + 1 Non Veg Main Course
`}</Text>
            <Text style={[styles.text11, styles.textTypo2]}>
              ₹1,000/-
            </Text>
          </Text>
        </View>
        <View style={styles2.container}>
      <RectangleRadioButton selected={isChecked} onSelect={handlePress} />
    </View>
      </View>
    </View>
  );
};


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

export default StarterComponent;