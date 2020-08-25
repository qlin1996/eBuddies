import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "./SignUpScreen";
import SignUpTwoScreen from "./SignUpTwoScreen";
import InterestsScreen from "./InterestsScreen";

const Stack = createStackNavigator();

function SignUpStack() {
  return (
    <Stack.Navigator
      initialRouteName="Sign Up"
      component={SignUpScreen}
      //   screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Sign Up Pt. 1"
        component={SignUpScreen}
        // options={{ title: "Sign Up Pt. 1" }}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Sign Up Pt. 2"
        component={SignUpTwoScreen}
        // options={{ title: "Sign Up Pt. 2" }}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Interests"
        component={InterestsScreen}
        options={{ headerShown: true }}
        // initialParams={{ user: "me" }}
      />
    </Stack.Navigator>
  );
}

export default SignUpStack;
