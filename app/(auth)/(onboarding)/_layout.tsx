import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OnboardingLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default OnboardingLayout;

const styles = StyleSheet.create({});
