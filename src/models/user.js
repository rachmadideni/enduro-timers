import { Model } from "@nozbe/watermelondb";
import { field, immutableRelation } from "@nozbe/watermelondb/decorators";

class User extends Model {
  static table = "users";

  @field("fullname") fullName;
  @field("email") email;
  @field("password") password;
  @field("token") token;
  @field("is_active") isActive;
  @immutableRelation("roles", "role_id") roleId;
}

export default User;