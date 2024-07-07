import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "@/models/schema";
import migration from "../models/migration";

// Models
import User from "../models/user";
import Role from "../models/role";
import Event from "../models/event";

// import LapStages from "../models/lap_stages";
// import RaceCategory from "../models/race_category";
// import RaceStages from "../models/race_stages";
// import RaceResult from "../models/race_result";
// import Racers from "../models/racers";
// import Race from "../models/race";

const adapter = new SQLiteAdapter({
  dbName: "enduro-timers",
  schema,
  migration,
  onSetUpError: (error) => {
    console.error(error);
  },
});

const database = new Database({
  adapter,
  modelClasses: [
    User,
    Role,
    Event,
    // LapStages,
    // RaceCategory,
    // RaceStages,
    // RaceResult,
    // Racers,
    // Race,
  ],
  actionsEnabled: true,
});

export default database;
