import { StyleSheet, View, Text } from "react-native";
import { useRouter } from "expo-router";
// import ButtonGradient from "@/components/ButtonGradient";

const About = () => {
  const router = useRouter();
  // const goToRaceEventList = () => {
  //   router.push("/race-event");
  // };
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: 20,
    gap: 20,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default About;
