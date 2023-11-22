import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for icons

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>LocalVibe Hub</Text>

      <View style={styles.header}>
        <FontAwesome name="user-circle" size={50} color="#333" />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Biraj Karki</Text>
          <Text style={styles.userLocation}>Nepal</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Basic Information</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Age:</Text>
          <Text style={styles.infoValue}>19</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Occupation:</Text>
          <Text style={styles.infoValue}>Student</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Interests</Text>
        <View style={styles.interestsContainer}>
          <View style={styles.interestBox}>
            <Text style={styles.interest}>Cafe Events</Text>
          </View>
          <View style={styles.interestBox}>
            <Text style={styles.interest}>Outdoor Activities</Text>
          </View>
          <View style={styles.interestBox}>
            <Text style={styles.interest}>Technology Meetups</Text>
          </View>
          {/* Add more interests as needed */}
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Upcoming Events</Text>
        <View style={styles.eventBox}>
          <Text style={styles.eventName}>Local Art Showcase</Text>
          <Text style={styles.eventDate}>Date: December 10, 2023</Text>
          <Text style={styles.eventLocation}>Location: Art Gallery</Text>
        </View>
        {/* Add more upcoming events as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userLocation: {
    color: "#666",
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 16,
    color: "#333",
  },
  infoValue: {
    fontSize: 16,
    color: "#666",
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  interestBox: {
    backgroundColor: "#f0f0f0", // Light gray background
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  interest: {
    fontSize: 16,
    color: "#333",
  },
  eventBox: {
    backgroundColor: "#f0f0f0", // Light gray background
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventDate: {
    fontSize: 14,
    color: "#666",
  },
  eventLocation: {
    fontSize: 14,
    color: "#666",
  },
});
