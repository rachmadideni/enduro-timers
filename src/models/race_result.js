import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class RaceResult extends Model {
  static table = "race_result";

  @immutableRelation("race", "race_id") raceId;
  @immutableRelation("racers", "racer_id") racerId;
  @immutableRelation("lap_stages", "lap_stages_id") lapStagesId;
  @field("time_result") timeResult;
  @immutableRelation("users", "created_by") createdBy;
  @immutableRelation("users", "updated_by") updatedBy;
  
}

export default RaceResult;
