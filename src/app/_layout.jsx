import { StyleSheet, View, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import Header from "@/components/Header";
import { store } from "../store";

const RootLayout = () => {
  const hideHeaderLeftButton = false;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Stack
          screenOptions={{
            header: () => <Header title="Enduro Timers" />,
            headerLeft: () =>
              hideHeaderLeftButton ? null : (
                <View style={{ marginLeft: 10 }}>
                  <Button
                    onPress={() => setCount((c) => c + 1)}
                    title="Left Button"
                  />
                </View>
              ),
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="about" />
        </Stack>
      </Provider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
