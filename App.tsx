const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Frame1 from "./screens/Frame1";
import Menu from "./screens/Menu";
import Frame2 from "./components/Frame2";
import Property1Disable from "./components/Property1Disable";
import Frame4 from "./screens/Frame4";
import Frame3 from "./components/Frame3";
import Frame5 from "./screens/Frame5";
import Frame from "./screens/Frame";
import Frame6 from "./screens/Frame6";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
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
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Frame1"
                component={Frame1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame4"
                component={Frame4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame5"
                component={Frame5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame"
                component={Frame}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame6"
                component={Frame6}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
