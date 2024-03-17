import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignInPage from "./screens/SignInPage";
import Frame2 from "./components/Frame2";
import SignUpPage from "./screens/SignUpPage";
import SeeMenu from "./screens/SeeMenu";
import Frame from "./screens/Frame";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import Home from "./screens/Home";
import DisplayCard from "./components/DisplayCard";
import ExplorePage from "./screens/ExplorePage";

const Stack = createStackNavigator();

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
