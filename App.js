const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./screens/Splash";
import RegisterPage2 from "./screens/RegisterPage2";
import Dashboard from "./screens/Dashboard";
import Identification from "./screens/Identification";
import Identification1 from "./screens/Identification1";
import FindTravel from "./screens/FindTravel";
import FlightStatus from "./screens/FlightStatus";
import BookTrip from "./screens/BookTrip";
import MyTrips from "./screens/MyTrips";
import TripPage from "./screens/TripPage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import Language from "./screens/Language";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterPage2"
              component={RegisterPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Identification"
              component={Identification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Identification1"
              component={Identification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindTravel"
              component={FindTravel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlightStatus"
              component={FlightStatus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookTrip"
              component={BookTrip}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTrips"
              component={MyTrips}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TripPage"
              component={TripPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterPage"
              component={RegisterPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Language"
              component={Language}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
