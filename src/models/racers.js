import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class Racers extends Model {
  static table = "racers";

  @field("racer_identification_no") racerIdentificationNo;
  @field("racer_bib_number") racerBibNumber;
  @field("registered_at") registeredAt;
  @immutableRelation("users", "created_by") createdBy;
  @immutableRelation("users", "updated_by") updatedBy;
  @immutableRelation("events", "event_id") eventId;
  @immutableRelation("race_category", "race_category_id") raceCategoryId;
}

export default Racers;
