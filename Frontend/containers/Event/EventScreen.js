import React from "react";
import { Text, View, Image, Button } from "react-native";
import Style from "./EventScreenStyle";

const Event = (props) => {
  const { event } = props;
  function convertTime(timeString) {
    const hour = timeString.substr(0, 2);
    let h = hour % 12 || 12;
    let ampm = hour < 12 || hour === 24 ? "AM" : "PM";
    return h + timeString.substr(2, 3) + ampm;
  }

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
          <Text style={Style.dateFonts}>
            {event.date
              ? event.date.slice(5, 10) + "-" + event.date.slice(0, 4)
              : null}
          </Text>
          <View>
            <Text style={Style.dateFonts}>
              Time: {event.time ? convertTime(event.time) : null}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Event;
