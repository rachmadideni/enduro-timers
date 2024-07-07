import { StyleSheet, Pressable, Text, View } from "react-native";
const Timer = ({ time, style, onPress }) => {
    return (
      <Pressable
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={style}
        onPress={onPress}
      >
        <TimeDisplay time={time} />
        <Text style={styles.text}>Tap to start the Race</Text>
      </Pressable>
    );
}

const TimeDisplay = ({ time }) => {
  
  const formatTime = (time) => {

    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    // const milliseconds = String(time % 1000).padStart(3, "0");
    return `${hours}:${minutes}:${seconds}`;
    //return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <View
      style={{
        width: 140,
        alignItems: "center",
      }}
    >
      <Text style={styles.timer}>{formatTime(time)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: "700",
  },
  timer: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Timer;