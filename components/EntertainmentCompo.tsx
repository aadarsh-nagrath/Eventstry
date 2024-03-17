import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styles from '../screens/SeeMenuStyles';


const RectangleRadioButton = ({ selected, onSelect }) => {
    return (
      <TouchableOpacity onPress={onSelect} style={[styles2.rectangleView, styles.frameChildLayout, styles2.radioButton]}>
        {selected && <View style={styles2.radioButtonInner} />}
      </TouchableOpacity>
    );
  };
  

const EntertainmentCompo = (props) => {
  const { itemName, price } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };  

  return (
    <View style={[styles.groupParent6, styles.groupLayout1]}>
      <View style={styles.liveMusic8900Wrapper}>
        <Text
          style={[
            styles.liveMusic8900Container,
            styles.containerPosition,
          ]}
        >
          <Text style={styles.liveMusic}>{itemName}</Text>
          <br/>
          <Text style={styles.text16}>{price}</Text>
        </Text>
      </View>
      <RectangleRadioButton selected={isChecked} onSelect={handlePress} />
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
    rectangleView: {
        left: 555,
        top: "30%",
        position: "absolute",
      },
  });

export default EntertainmentCompo;
