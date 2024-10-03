import React, { useEffect, useState } from "react";
import { useColorScheme, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider } from "react-native-paper";
import { theme } from "@/constants/Theme";
import AppRouter from "@/router/router";

const { schemes, ...appTheme } = theme;

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const colorScheme = useColorScheme();
  const router = useRouter();

  const lookskyTheme =
    colorScheme === "dark"
      ? { ...appTheme, colors: schemes.dark }
      : { ...appTheme, colors: schemes.light };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={lookskyTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack initialRouteName="(auth)" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
