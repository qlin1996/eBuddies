import React from "react";
import { View, Text, ScrollView, Button, Image } from "react-native";
import { connect } from "react-redux";
import Style from "./AttendeeListScreenStyle";
import { Card, Appbar, Surface } from "react-native-paper";
import { fetchSingleEvent } from "../../store/singleEvent";
class AttendeeList extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.fetchSingleEvent(this.props.event.id);
  }

  render() {
    let users = this.props.event.users;
    return (
      <View>
        <View style={Style.container1}>
          <Appbar.Header style={Style.appHeader}>
            <Appbar.Content
              title={`${this.props.event.name} Attendee's`}
              color="white"
            />
          </Appbar.Header>
          {this.props.event.users.map((user) => {
            return (
              <Surface style={Style.attendee} key={event.id}>
                <Text style={Style.members}>
                  {user.firstName} {""}
                  {user.lastName}
                  {user.activity.attended === true ? (
                    <Text style={Style.here}> {"               "}HERE</Text>
                  ) : null}
                </Text>
                <Image
                  style={Style.pin}
                  source={require("../../assets/user-pin.png")}
                />
              </Surface>
            );
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // events: state.events,
  event: state.singleEvent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeList);
