import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Stack from "expo-router/stack";
import { useNavigation, useRouter } from "expo-router";

const AuthLayout = () => {
  const isFirstLunched = true;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(sign)" />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
