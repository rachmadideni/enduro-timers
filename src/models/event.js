import { Model } from '@nozbe/watermelondb';
import { field, immutableRelation } from '@nozbe/watermelondb/decorators';

class Event extends Model {
    static table = 'events';

    // static associations = {
    //     users: {
    //         type: 'belongs_to',
    //         key:'created_by'
    //     }
    // }

    @field('event_name') eventName;
    @field('event_date') eventDate;
    @field('event_status') eventStatus;
    @immutableRelation('users', 'created_by') createdBy;
    @immutableRelation('users', 'updated_by') updatedBy;
}

export default Event;