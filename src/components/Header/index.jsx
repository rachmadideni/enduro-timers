import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderLeftContainer = (props) => {
  return (
    <View
      style={{
        width: "10%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </View>
  );
};

const HeaderRightContainer = (props) => {
  return (
    <View
      style={{
        width: "10%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </View>
  );
};

export default function Header({ title, headerLeft, headerRight }) {
  const { styles } = useStyle();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["#3d3f39", "#2f302e"]}
        style={{
          flex: 1,
          flexDirection: "row",
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        {headerLeft && <HeaderLeftContainer>{headerLeft}</HeaderLeftContainer>}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
        {headerRight && (
          <HeaderRightContainer>{headerRight}</HeaderRightContainer>
        )}
      </LinearGradient>
    </View>
  );
}

const useStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      height: 100,
      // height: "10%",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "yellow",
      paddingTop:20
      // marginBottom:20
    },
    title: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "600",
      color: "white",
    },
  });
  return {
    styles,
  };
};
