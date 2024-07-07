import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

function createArrayOfObjects() {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    array.push({
      bipNo: i,
      name: faker.person.fullName(),
      time: 0,
      isComplete: false,
    });
  }
  return array;
}

const initialState = {
  currentIntervalId: 0,
  racers: [],
  event: {
    name: null,
    date: null,
    type: null, // prolog (qualification) or ss (special stages)
    specialStageCount: 1,
    status: null,
  },
};

export const raceTimers = createSlice({
  name: "raceTimers",
  initialState,
  reducers: {
    setupEvent: (state, action) => {
      const { name, date, type, specialStageCount } = action.payload;
      state.event.name = name;
      state.event.date = date;
      state.event.type = type;
      state.event.specialStageCount = specialStageCount;
    },
    updateEventStatus: (state, action) => {
      const { status } = action.payload;
      state.event.status = status;
    },
    setRacers: (state, action) => {
      state.racers = action.payload;
    },
    setCurrentIntervalId: (state, action) => {
      state.currentIntervalId = action.payload;
    },
    stopTimer: (state, action) => {
      const { bipNo, timeCompleted } = action.payload;
      state.racers = state.racers.map((item) =>
        item.bipNo === bipNo
          ? { ...item, time: timeCompleted, isComplete: true }
          : item
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setupEvent,
  updateEventStatus,
  setRacers,
  setCurrentIntervalId,
  stopTimer,
} = raceTimers.actions;

export default raceTimers.reducer;
