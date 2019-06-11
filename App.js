import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./src/components/ListItem";
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";
import placeImage from "./src/assets/japan.jpg";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  placeDeleteHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== key)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

//using web image:
// placeAddedHandler = placeName => {
//   this.setState(prevState => {
//     return {
//       places: prevState.places.concat({
//         key: Math.random(),
//         name: placeName,
//         image: {
//           uri:
//             "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg/800px-Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg"
//         }
//       })
//     };
//   });
// };
