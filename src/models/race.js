import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class Racer extends Model {
  static table = "racer";

  @immutableRelation("events", "event_id") eventId;
  @immutableRelation("racers", "racer_id") racerId;
  @immutableRelation("race_stages", "race_stages_id") raceStagesId;

}

export default Racer;
