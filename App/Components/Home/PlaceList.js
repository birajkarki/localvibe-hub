import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";

const dummyData = [
  {
    id: "1",
    name: "Local Art Showcase",
    date: "December 10, 2023",
    location: "Art Gallery",
  },
  {
    id: "2",
    name: "Food Festival",
    date: "December 15, 2023",
    location: "City Park",
  },
  {
    id: "3",
    name: "Live Music Night",
    date: "December 20, 2023",
    location: "Downtown Theater",
  },
  {
    id: "4",
    name: "Tech Meetup",
    date: "December 25, 2023",
    location: "Innovation Hub",
  },
  {
    id: "5",
    name: "Fitness Bootcamp",
    date: "December 30, 2023",
    location: "Fitness Center",
  },
];

export default function PlaceList({ placeList }) {
  const navigator = useNavigation();
  const onPlaceClick = (item) => {
    navigator.navigate("place-detail", { place: item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Upcoming Events</Text>

      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onPlaceClick(item)}
            style={styles.box}
          >
            <PlaceItem place={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1} // Display items in 1 column
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "raleway-bold",
    marginBottom: 10,
  },
  box: {
    marginBottom: 10,
  },
});
