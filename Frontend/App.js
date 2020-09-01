import { registerRootComponent } from "expo";
import React from "react";
import RootNavigator from "./navigators/RootNavigator";
import configureStore from "./store/store";
import { Provider } from "react-redux";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

registerRootComponent(App);
