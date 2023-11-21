import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";

export default function Home() {
  return (
    <View style={{ paddingLeft: 10, paddingTop: 50 }}>
      <Header />
      <GoogleMapView />
    </View>
  );
}
