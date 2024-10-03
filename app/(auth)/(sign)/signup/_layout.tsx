import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default SignUpLayout;

const styles = StyleSheet.create({});
