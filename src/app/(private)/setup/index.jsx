import { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import ButtonGradient from "@/components/ButtonGradient";
import { useSelector } from "react-redux";
const SetupPage = () => {
  const { styles } = useStyles();
  const [selectedEventCard, setSelectedEventCard] = useState(false);
  const event = useSelector((state) => state.raceTimers.event);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Setup Events</Text>
      {event && (
        <EventCard
          event={event}
          selectedEventCard={selectedEventCard}
          onPress={() => setSelectedEventCard((prev) => !prev)}
        />
      )}
    </View>
  );
};

const EventCard = ({ event, selectedEventCard, onPress }) => {
  const { styles } = useStyles();
  console.log("selectedEventCard", selectedEventCard);
  return (
    <Pressable
      style={[
        styles.eventCard,
        {
          borderColor: selectedEventCard ? "green" : "#dddddd",
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.eventCardTitle}>{event.name}</Text>
      <Text>{event.date}</Text>
    </Pressable>
  );
};

const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: StatusBar.currentHeight || 0,
      gap: 20,
      paddingHorizontal: 20,
    },
    pageTitle: {
      fontSize: 24,
      fontWeight: "700",
    },
    eventCard: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 20,
    },
    eventCardTitle: {
      fontSize: 22,
      fontWeight: "600",
      textTransform: "capitalize",
    },
  });

  return {
    styles
  }

}

export default SetupPage;
