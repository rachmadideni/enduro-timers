import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const TimeDisplay = ({ time }) => {

    const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
        const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(
            2,
            "0"
        );
        const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
        const milliseconds = String(time % 1000).padStart(3, "0");
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    return (
        <View style={{
            width: 140,
            alignItems: 'center',
            // backgroundColor:'purple'
        }}>
            <Text style={mainTimerStyles.timer}>
                {formatTime(time)}
            </Text>
        </View>
    )
}

export default function MainTimer() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef();

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!isRunning && intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    return (
        <Pressable
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={mainTimerStyles.container}
            onPress={handleStartStop}
        >
            <TimeDisplay time={time} />
            <Text style={mainTimerStyles.text}>Tap to Record Time</Text>
        </Pressable>
    )
}

const mainTimerStyles = StyleSheet.create({
    container: {
        width: 200,
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#91c91a',
        borderRadius: 10
    },
    timer: {
        fontSize: 20,
        fontWeight: '700'
    },
    text: {
        fontSize: 12,
        fontWeight:'700'
    }
});

const timerDisplayStyles = StyleSheet.create({

})