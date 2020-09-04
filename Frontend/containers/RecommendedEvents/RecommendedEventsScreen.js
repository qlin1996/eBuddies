import React from "react";
import { View, Text, ScrollView, Button, Image } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import Style from "./RecommendedEventsScreenStyle";
import { getAllEvents } from "../../store/events";
import { getUserInfo } from "../../store/user";

class RecommendedEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "All",
    };
  }

  componentDidMount() {
    this.props.getUser(this.props.user.id);
  }

  handleClick = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter } = this.state;
    const eventsFilter = this.props.events.filter((event) => {
      if (filter === "All") return event;
      if (filter === "Food") return event.category === "Food";
      if (filter === "Education") return event.category === "Education";
      if (filter === "Fitness") return event.category === "Fitness";
      if (filter === "Entertainment") return event.category === "Entertainment";
    });
    const user = this.props.user;
    const interests = this.props.interests;

    let interestArray = [];
    interests.forEach((interest) => {
      interestArray.push(interest.userInterest);
    });

    const events = eventsFilter.filter((event) => {
      return interestArray.includes(event.category);
    });

    return (
      <>
        <ScrollView>
          <View>
            {user.firstName ? (
              <View>
                <View style={Style.welcomeDiv}>
                  <Text style={Style.welcomeText}>
                    Welcome, {user.firstName} {user.lastName}
                  </Text>
                </View>
                <Text style={Style.interests}>Based on your Interests</Text>
                {interests.length === 0 && (
                  <Text>You have not selected any interests</Text>
                )}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  {interests.map((interest) => (
                    <View key={interest.id}>
                      <View style={Style.interest}>
                        <View style={Style.childInterest}>
                          <Button
                            title={interest.userInterest}
                            onPress={() => {
                              this.setState({ filter: interest.userInterest });
                            }}
                            value={this.state.filter}
                          />
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
                {events.map((event) => {
                  return (
                    <View key={event.id}>
                      <View style={Style.childContainer}>
                        <View style={Style.childrenContainer}>
                          <Text style={Style.interestPoints}>
                            Because on your Interest in{" "}
                            <Text style={Style.specificInterest}>
                              {event.category}{" "}
                            </Text>
                          </Text>
                        </View>

                        <Event event={event} />
                        <View style={Style.recEvents}>
                          <Button
                            title="View Event"
                            onPress={() => {
                              this.props.navigation.navigate("SINGLEEVENT", {
                                id: event.id,
                              });
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  );
                })}
                <Button
                  title="ALL EVENTS"
                  onPress={() => this.props.navigation.navigate("EVENTS")}
                >
                  ALL EVENTS
                </Button>
              </View>
            ) : (
              <View>
                <Text>Welcome, Guest</Text>
                <Button
                  title="Continue to All Events"
                  onPress={() => this.props.navigation.navigate("EVENTS")}
                >
                  Continue to All Events
                </Button>
              </View>
            )}
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  user: state.user,
  interests: state.interests,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getAllEvents()),
  getUser: (id) => dispatch(getUserInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedEvents);
