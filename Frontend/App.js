import { registerRootComponent } from "expo";
import React from "react";
import UserNavigator from "./navigators/UserDrawer";
import RootNavigator from "./navigators/RootNavigator";
import configureStore from "./store/store";
import { Provider } from "react-redux";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      {/* <UserNavigator /> */}
      <RootNavigator />
    </Provider>
  );
};

export default App;

registerRootComponent(App);
