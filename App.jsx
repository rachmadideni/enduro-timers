import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyApp from "./src/app";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:40
  },
});
