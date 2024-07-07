import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class LapStages extends Model {
  static table = "lap_stages";

  @field("lap_stage_name") lapStageName;
}

export default LapStages;
