import { StyleSheet, View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
// import EntryTimedList from "@/components/List";
import Table from "@/components/Table";
import Typography from "@/components/Typography";

import { data } from "@/data";

export default function RacePage() {
  const router = useRouter();
  const renderRowActions = (item) => {    
    return (
      <View
        style={styles.rowActionsContainer}
      >
        <Pressable style={styles.rowActionsButton} onPress={() => router.push(`/racer/${item.eventId}`)}>
          <Text>Open</Text>
        </Pressable>        
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <EntryTimedList /> */}
      <Typography style={styles.pageTitle}>Race List</Typography>
      <Table
        columns={data.events.columns}
        data={data.events.data}
        rowActions={renderRowActions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "700",
    padding: 10,
  },
  rowActionsContainer: {
    width: "30%",
    gap: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  rowActionsButton: {
    backgroundColor: "#dadada", padding: 10, borderRadius: 4
  }
});
