import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./src/components/ListItem";
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";
import placeImage from "./src/assets/japan.jpg";
import PlaceDetail from "./src/components/PlaceDetail";

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
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

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    //to delete
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    //to close modal
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
