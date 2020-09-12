import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import Style from "./RecommendedEventsScreenStyle";
import { getAllEvents } from "../../store/events";
import { getUserInfo } from "../../store/user";
import { getAllInterests } from "../../store/interest";
import { Appbar, Surface } from "react-native-paper";

class RecommendedEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "All",
      search: "",
    };
  }

  async componentDidMount() {
    await this.props.getUser(this.props.user.id);
    await this.props.getAllInterests(this.props.user.id);
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
            <Appbar.Header style={Style.appHeader}>
              <Appbar.Content
                title="Recommended Events"
                subtitle={`Welcome, ${this.props.user.firstName} ${this.props.user.lastName}`}
                color="white"
              />
            </Appbar.Header>
            {user.firstName ? (
              <View>
                {interests.length === 0 && (
                  <Text>You have not selected any interests</Text>
                )}
                <View style={Style.interestsurface}>
                  {interests.map((interest) => (
                    <Surface style={Style.surface} key={interest.id}>
                      <View key={interest.id}>
                        <Button
                          title={interest.userInterest}
                          onPress={() => {
                            this.setState({
                              filter: interest.userInterest,
                            });
                          }}
                          value={this.state.filter}
                        />
                      </View>
                    </Surface>
                  ))}
                </View>

                {events.map((event) => {
                  return (
                    <View key={event.id}>
                      <Event event={event} />
                      <View style={Style.recEvents}>
                        <Surface style={Style.surfaceEvent}>
                          <Button
                            title="View Event"
                            onPress={() => {
                              this.props.navigation.navigate("SINGLEEVENT", {
                                id: event.id,
                              });
                            }}
                          />
                        </Surface>
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
  getAllInterests: (id) => dispatch(getAllInterests(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedEvents);
