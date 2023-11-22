import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.appName}>LocalVibe Hub</Text>
      <Text style={styles.description}>
        Connecting communities with vibrant local experiences. LocalVibe Hub is
        your go-to mobile app for seamless interaction with local businesses and
        staying informed about exciting events in your area.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features:</Text>
        <View style={styles.featureBox}>
          <Text style={styles.feature}>
            1. Local Business Directory: Explore a diverse range of local
            businesses. View detailed profiles and leave ratings and reviews to
            support your favorites.
          </Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.feature}>
            2. Event Promotion Platform: Discover upcoming local events, from
            farmers' markets to live performances. Purchase tickets directly
            through the app, and event organizers can create profiles to reach a
            wider audience.
          </Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.feature}>
            3. Community Engagement: Join discussions and forums to connect with
            neighbors. Post and find local recommendations, tips, and
            announcements. Stay up-to-date with a community bulletin board.
          </Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.feature}>
            4. Map Integration: Plan your day by exploring businesses and events
            on an integrated map. Get directions and navigate the local scene
            effortlessly.
          </Text>
        </View>
        <View style={styles.featureBox}>
          <Text style={styles.feature}>
            5. Personalized Recommendations: Receive tailored suggestions based
            on your preferences. Keep track of your favorite businesses and
            events.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    backgroundColor: "#f0f0f0", // Light gray background
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  section: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureBox: {
    backgroundColor: "#f9f9f9", // Lighter gray background
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  feature: {
    fontSize: 16,
    color: "#333",
  },
});
