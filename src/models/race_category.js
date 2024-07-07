import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class RaceCategory extends Model {
  static table = "race_category";

  @field("race_category_name") raceCategoryName;
}

export default RaceCategory;
