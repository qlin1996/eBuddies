import React from "react";
import { Text, View, Image, Button } from "react-native";
import { Card, Title, Paragraph, Appbar } from "react-native-paper";

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
      <Card style={Style.card}>
        <Paragraph style={Style.title}>
          {""}
          {event.name}
        </Paragraph>
        <Paragraph style={Style.cardAddress}>{event.address}</Paragraph>
        <Paragraph style={Style.cardAddress}>
          {event.city}, {event.state} {""}
          {event.zipCode}
        </Paragraph>

        <Paragraph style={Style.cardDate}>
          {event.date
            ? event.date.slice(5, 10) + "-" + event.date.slice(0, 4)
            : null}{" "}
          {"at"} {event.time ? convertTime(event.time) : null}
        </Paragraph>

        <Card.Cover style={Style.cardImg} source={{ uri: event.imgUrl }} />
        <Card.Content>
          <Paragraph style={Style.cardDescription}>
            {event.description}
          </Paragraph>
        </Card.Content>

        <Card.Actions>
          <Button title="">Cancel</Button>
          <Button title="">Ok</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

export default Event;
