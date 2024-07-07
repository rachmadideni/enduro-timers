import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

class Role extends Model {
  static table = "roles";

  @field("role_name") roleName;
  @field("is_active") isActive;
}

export default Role;
