import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class RaceStages extends Model {
    static table = 'race_stages';

    @field('stage_name') stageName;
    @field('is_active') isActive;
    @field('description') description;
}

export default RaceStages;