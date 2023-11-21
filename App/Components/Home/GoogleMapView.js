import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";

export default function GoogleMapView() {
  const [mapRegion, setmapRegion] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      });
    }
  }, []);
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "600",
          fontFamily: "raleway-bold",
        }}
      >
        Top Near By Places
      </Text>
      <View style={{ borderRadius: 20, overflow: "hidden" }}>
        <MapView
          style={{
            width: Dimensions.get("screen").width * 0.93,
            height: Dimensions.get("screen").height * 0.23,
            borderRadius: 20,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        ></MapView>
      </View>
    </View>
  );
}
