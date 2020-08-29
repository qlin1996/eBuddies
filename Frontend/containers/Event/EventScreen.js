import React from "react";
import { Text, View, Image, Button } from "react-native";
import Style from "./EventScreenStyle";

const Event = (props) => {
  const { event } = props;
  return (
    <>
      <View style={Style.wholeCardDiv}>
        <View style={Style.imageDiv}>
          <Image style={Style.eventImg} source={{ uri: event.imgUrl }} />
        </View>
        <View style={Style.headerBackground}>
          <Text style={Style.headerText}>{event.name}</Text>
        </View>
        <View style={Style.informationDiv}>
          <Text style={Style.fonts}>{event.description}</Text>
          <Text style={Style.addressFonts}>{event.address}</Text>
          <Text style={Style.dateFonts}>{event.date}</Text>
        </View>
      </View>
    </>
  );
};

export default Event;
