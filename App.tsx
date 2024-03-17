import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native"; // Added import
import SignInPage from "./src/screens/SignInPage";
import SignUpPage from "./src/screens/SignUpPage";
import SeeMenu from "./src/screens/SeeMenu";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import Home from "./src/screens/Home";
import ExplorePage from "./src/screens/ExplorePage";

const Stack = createStackNavigator();

const App = () => {
  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => <MaterialIcon name={name} {...props} />, // Corrected usage of MaterialIcon component
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }

  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignInPage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignInPage" component={SignInPage} />
            <Stack.Screen name="SignUpPage" component={SignUpPage} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ExplorePage" component={ExplorePage} />
            <Stack.Screen name="SeeMenu" component={SeeMenu} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
