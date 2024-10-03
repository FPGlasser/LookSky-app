import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: "Home" }} />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
