import React from 'react';
import { View, Image } from 'react-native';
import LoginContainer from './LoginContainer'; // Assuming the file path is correct
import SearchContainer from './SearchContainer'; // Assuming the file path is correct
import styles from './HeaderComponentStyles'; // Import your styles

const HeaderComponent = () => {
  return (
    <View style={[styles.groupParent, styles.groupLayout]}>
      <View
        style={[
          styles.logo39ab30e9cd984a48cdd3b9dbbWrapper,
          styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
        ]}
      >
        <Image
          style={[
            styles.logo39ab30e9cd984a48cdd3b9dbbIcon,
            styles.logo39ab30e9cd984a48cdd3b9dbbLayout,
          ]}
          contentFit="cover"
          source={require("../../assets/logo39ab30e9cd984a48cdd3b9dbbbc80549-2.png")}
        />
      </View>
      <LoginContainer />
      <SearchContainer />
    </View>
  );
};

export default HeaderComponent;
