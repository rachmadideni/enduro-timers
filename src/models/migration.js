import { schemaMigrations, createTable } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
  migrations: [
    // We'll add migration definitions here later
    {
      toVersion: 1,
      steps: [
        createTable({
          name: "users",
          columns: [
            { name: "fullname", type: "string" },
            { name: "email", type: "string" },
            { name: "password", type: "string" },
            { name: "token", type: "string" },
            { name: "is_active", type: "boolean" },
            { name: "role_id", type: "string" },
            { name: "created_at", type: "number" },
            { name: "updated_at", type: "number" },
          ],
        }),
        createTable({
          name: "roles",
          columns: [
            { name: "role_name", type: "string" },
            { name: "is_active", type: "boolean" },
            { name: "created_at", type: "number" },
            { name: "updated_at", type: "number" },
          ],
        }),
      ],
    },
  ],
});