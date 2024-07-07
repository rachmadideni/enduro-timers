import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient({
  text,
  buttonStyle,
  variant = "primary",
  startIcon,
  endIcon,
  onPress,
  disabled,
  showLoader
}) {
  const fbStyle = ["#4c669f", "#3b5998", "#192f6a"];
  const blackStyle = ["#3d3f39", "#2f302e", "#585956"];
  const greenStyle = ["#91c91a", "#84b716", "#76a80b"];
  const disabledColors = ["#bcb8b8", "#afa8a8", "#918c8c"];
  const variantColors =
    variant === "primary"
      ? blackStyle
      : variant === "green"
      ? greenStyle
      : fbStyle;

  return (
    <Pressable onPress={onPress} disabled={disabled || showLoader}>
      <LinearGradient
        colors={disabled ? disabledColors : variantColors}
        style={[styles.button, buttonStyle]}
      >
        {startIcon && startIcon}
        <Text style={disabled ? styles.textDisabled : styles.text}>{text}</Text>
        {endIcon && endIcon}
        {showLoader && <ActivityIndicator animating={showLoader} size="small" color="white" />}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: "black",
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  textDisabled: {
    fontSize: 15,
    color: "#eae3e3",
    textDecorationLine:"line-through"
  },
});
