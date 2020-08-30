// import React from "react";
// import { View, Text, ScrollView, Button } from "react-native";
// import { connect } from "react-redux";
// import Event from "../Event/EventScreen";
// import Style from "./AllEventsScreenStyle";
// import { getAllEvents } from "../../store/events";
// import { getUserInfo } from "../../store/user";

// class HostScreen extends React.Component {
//   constructor() {
//     super();
//   }

//   componentDidMount() {
//     this.props.getAllEvents();
//     this.props.getUser(this.props.user.id);
//   }

//   handleEventClick = () => {
//     this.props.navigation.navigate("SINGLEEVENT");
//   };

//   render() {
//     let userId = this.props.user.id;

//     const events = this.props.events.forEach((event) => {
//       if (event.hostId === userId) {
//         return event;
//       }
//     });

//     if (events.length >= 1) {
//       eventList = events.map((event) => {
//         return (
//           <View key={event.id}>
//             <Event event={event} />
//             <Button
//               style={Style.eventButton}
//               title="View Event"
//               onPress={this.handleEventClick}
//             />
//           </View>
//         );
//       });
//     }

//     return (
//       <>
//         <ScrollView>
//           <View>
//             {events.length >= 1 ? (
//               eventList
//             ) : (
//               <Text style={Style.errorMsg}>Sorry, no events scheduled.</Text>
//             )}
//           </View>
//         </ScrollView>
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   events: state.events,
//   user: this.state.user,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getUser: (id) => {
//     return dispatch(getUserInfo(id));
//   },
//   getAllEvents: () => dispatch(getAllEvents()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HostScreen);
