import { useState } from "react";
import { StyleSheet, View, Text, Button, StatusBar } from "react-native";
import { useRouter, Stack } from "expo-router";
import * as DocumentPicker from "expo-document-picker";
import { read, write, utils } from "xlsx";
import { format, parseISO } from "date-fns";
import {
  // documentDirectory,
  readAsStringAsync,
  // writeAsStringAsync,
  // StorageAccessFramework,
} from "expo-file-system";

import { useDispatch, useSelector } from "react-redux";
import { setSyncStatus } from "../slices/syncSlice";
import { setRacers, setupEvent } from "../slices/raceTimersSlice";
import ButtonGradient from "@/components/ButtonGradient";
import Modal from "@/components/Modal";

const MyApp = () => {
  const dispatch = useDispatch();
  const { isSync } = useSelector((state) => state.sync);
  const [isModalVisible, toggleModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const syncData = () => {
    dispatch(setSyncStatus(true));
  };

  const goToRaceEventList = () => {
    router.push("/race-event");
  };

  const goToTimers = () => {
    router.push("/(private)/race");
  };

  const goToSetupPage = () => router.push("/(private)/setup")

  // import file
  const importFile = async () => {
    dispatch(setSyncStatus(true));
    let result = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
      type: [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ],
    });
    if (result.assets) {
      try {
        const path = result.assets[0].uri;
        const raceExcelFile = await readAsStringAsync(path, {
          encoding: "base64",
        });
        const wb = read(raceExcelFile, { type: "base64" });

        
        const ws = wb.Sheets[wb.SheetNames[0]];
        const wsEvent = wb.Sheets[wb.SheetNames[1]];
        const racerData = utils.sheet_to_json(ws);
        const eventData = utils.sheet_to_json(wsEvent, {
          header: 0,
          raw: false,
          dateNF: "dd-mm-yyyy",
        });

        dispatch(setRacers(racerData));
        dispatch(
          setupEvent({
            name: eventData[0].name,
            date: eventData[0].start_date,
            type: null,
            specialStageCount: 3,
          })
        );
        dispatch(setSyncStatus(false));
        // goToTimers();
        // goToSetupPage()
        toggleModalVisible(true);
      } catch (err) {
        console.log(err)
        setErrorMessage(err);
        toggleModalVisible(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        type={errorMessage ? "error" : "success"}
        message={
          errorMessage
            ? "oops! please check your excel template files"
            : "Processing your race event"
        }
        onOk={() => {
          goToSetupPage();
        }}
        onClose={() => {
          toggleModalVisible((prev) => !prev);
        }}
      />
      <ButtonGradient
        variant="green"
        text="Import Data"
        // onPress={syncData}
        onPress={importFile}
        showLoader={isSync}
      />

      <ButtonGradient
        variant="green"
        text="Go To Race Timers"
        onPress={goToTimers}
        showLoader={false}
      />

      <ButtonGradient
        text="Show Downloaded Event"
        onPress={goToRaceEventList}
        // disabled={false}
      />
      {/* <Text>{JSON.stringify(excelData)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight || 0,
    gap: 20,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default MyApp;
