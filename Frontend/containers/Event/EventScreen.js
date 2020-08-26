import React from "react";
import { Text, View, Image } from "react-native";
import Style from "./EventScreenStyle";

const Event = (props) => {
  const { event } = props;
  console.log("EVENT PROPS >> ", event);
  return (
    <>
      <View style={Style.colMain}>
        <View style={Style.headerMain}>
          <Text style={Style.headerText}>{event[0].name}</Text>
          <Text style={Style.headerText}>{event[0].address}</Text>
          <Text style={Style.headerText}>{event[0].date}</Text>
        </View>

        <Image style={Style.eventImg} source={{ uri: event[0].imgUrl }} />

        <View>
          <Text style={Style.text}>{event[0].description}</Text>
        </View>
      </View>
    </>
  );
};

export default Event;
