import { View, Text, StyleSheet } from "react-native"
const AuthLayout = () => {
    return (
        <View style={styles.container}>
            <Text>AuthLayout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AuthLayout;