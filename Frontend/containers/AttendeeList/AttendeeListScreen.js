import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import Style from "./AttendeeListScreenStyle";
import { Appbar, Surface } from "react-native-paper";
import { fetchSingleEvent } from "../../store/event";

class AttendeeList extends React.Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    await this.props.fetchSingleEvent(this.props.event.id);
  }
  render() {
    let users = this.props.event.users || [];
    return (
      <View>
        <View style={Style.container1}>
          <Appbar.Header style={Style.appHeader}>
            <Appbar.Content
              title={`${this.props.event.name} Attendee's`}
              color="white"
            />
          </Appbar.Header>
          {users.map((user) => {
            return (
              <Surface style={Style.attendee} key={user.id}>
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
  event: state.event,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AttendeeList);
