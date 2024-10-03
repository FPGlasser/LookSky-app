import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router/stack";

const AppRouter = () => {
  const isFirstAccess = true;

  return (
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName={isFirstAccess ? "(onboarding)" : "(auth)"}
    >
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default AppRouter;

const styles = StyleSheet.create({});
