import React from "react";
import { View, Image } from "react-native";
import Style from "./HeaderScreenStyle";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderScreen({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <>
      <View style={Style.headerMain}>
        <MaterialIcons
          name="menu"
          size={28}
          onPress={openMenu}
          style={Style.burgerIcon}
        />
        <Image
          source={require("../../assets/ebuddies.gif")}
          style={Style.logo}
        />
      </View>
    </>
  );
}
