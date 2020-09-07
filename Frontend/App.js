import { registerRootComponent } from "expo";
import React from "react";
import RootNavigator from "./navigators/RootNavigator";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

const store = configureStore();

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </PaperProvider>
  );
};

export default App;

registerRootComponent(App);
