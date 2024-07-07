import { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  useWindowDimensions,
  AppState,
} from "react-native";

// import { usePathname } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

import Timer from "@/components/Timer";

import { setCurrentIntervalId, stopTimer } from "@/slices/raceTimersSlice";


const RacerTimeCol = ({ onPress, cellData }) => {
  const { styles } = useStyle();
  return (
    <Pressable onPress={onPress} disabled={cellData.isComplete}>
      {cellData.isComplete ? (
        <View style={[styles.racerColButtonStyle]} />
      ) : (
        <LinearGradient
          colors={["#bcb8b8", "#afa8a8", "#918c8c"]}
          style={[styles.racerColButtonStyle]}
        >
          <View>
            <Text style={styles.racerColText}>{cellData.bipNo}</Text>
          </View>
        </LinearGradient>
      )}
    </Pressable>
  );
};

const RacePage = () => {
  // const stopwatchTimerRef = useRef(null);

  const dispatch = useDispatch();
  const { racers, currentIntervalId } = useSelector(
    (state) => state.raceTimers
  );

  // app state
  // const pathname = usePathname();
  const appState = useRef(AppState.currentState);

  const { styles } = useStyle();

  const [selectedBipNo, setSelectedBipNo] = useState();
  // timer state
  // ------------------------------------------------------
  const [time, setTime] = useState(currentIntervalId);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerID;

    if (isRunning) {
      timerID = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 500);
    } else {
      clearInterval(timerID);
    }

    return () => clearInterval(timerID);
  }, [isRunning, time]);

  const handleStartStop = () => {
    
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // ------------------------------------------------------

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // console.log("app is active!");
        if (!isRunning) {
          setTime(currentIntervalId);
        }
      } else if (nextAppState === "background" || nextAppState === "inactive") {
        // Save the timer value when the app goes to the background
        console.log("app is inactive or in the background!", nextAppState);
        dispatch(setCurrentIntervalId(time));
      } else if (
        appState.current.match(/active/) &&
        nextAppState === "active"
      ) {
        console.log("aktif");
      } else {
        console.log("appState.current:", appState.current);
        console.log("nextAppState:", nextAppState);
      }
    });

    // cleanup
    return () => {
      subscription.remove();
    };
  }, []);

  const onPressRacerTimeCol = (item) => {
    if (isRunning) {
      dispatch(stopTimer({ bipNo: item.bipNo, timeCompleted: time }));
    }
  };

  const keyExtractor = (item) => item.bipNo;
  const renderItem = ({ item }) => (
    <RacerTimeCol
      onPress={() => {
        setSelectedBipNo(item.bipNo);
        onPressRacerTimeCol(item);
      }}
      cellData={item}
    />
  );

  return (
    <View style={styles.container}>
      <Timer
        onPress={handleStartStop}
        style={styles.timerContainer}
        time={time}
      />

      <FlatList
        style={styles.flatListContainer}
        data={racers}
        numColumns={4}
        initialNumToRender={12}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        extraData={selectedBipNo}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

const useStyle = () => {
  const dimensions = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: 20,
      //   marginBottom: 20,
      paddingHorizontal: 100,
    },
    flatListContainer: {
      flex: 1,
      width: dimensions.width,
      //   backgroundColor: "blue",
      marginTop: 20,
    },
    contentContainerStyle: {
      marginVertical: 50,
      paddingBottom: 100,
      alignItems: "center",
      rowGap: 20,
    },
    columnWrapperStyle: {
      columnGap: 20,
      rowGap: 20,
    },
    racerCol: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      maxWidth: 50,
      height: 50,
      maxHeight: 50,
      backgroundColor: "white",
      borderRadius: 6,
      margin: 4,
    },
    racerColText: {
      fontWeight: "bold",
      fontSize: 18,
      color: "black",
    },
    racerColButtonStyle: {
      padding: 10,
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      width: 60,
      maxWidth: 60,
      height: 60,
      maxHeight: 60,
      marginHorizontal: 6,
    },
    timerContainer: {
      width: 200,
      height: 100,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#91c91a",
      borderRadius: 10,
    },
    timer: {
      fontSize: 20,
      fontWeight: "700",
    },
  });

  return {
    styles,
  };
};

export default RacePage;
