import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useTheme, Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const theme = useTheme();
  const { colors, fonts } = theme;
  const router = useRouter();

  const isHaslunched = true;

  const handlePressButton = () => {
    if (isHaslunched) {
      router.replace("/(auth)/(sign)");
    } else {
      router.replace("/(auth)/(onboarding)");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.imageConatiner]}></View>
      <View style={[styles.buttonContainer]}>
        <Button
          mode="contained"
          onPress={handlePressButton}
          style={[styles.button]}
        >
          Let's Get Started
        </Button>
      </View>
      <StatusBar backgroundColor={colors.background} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageConatiner: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.2,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  button: {
    display: "flex",
    height: 50,
    justifyContent: "center",
  },
});
