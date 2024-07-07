import { appSchema, tableSchema } from "@nozbe/watermelondb";

const schema = appSchema({
  version: 0,
  tables: [
    tableSchema({
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
    tableSchema({
      name: "roles",
      columns: [
        { name: "role_name", type: "string" },
        { name: "is_active", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    // tableSchema({
    //   name: "events",
    //   columns: [
    //     { name: "event_name", type: "string" },
    //     { name: "event_date", type: "string" },
    //     { name: "event_status", type: "boolean" },
    //     { name: "created_by", type: "string" }, // many to one
    //     { name: "updated_by", type: "string", isOptional: true }, // many to one
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
    // tableSchema({
    //   name: "race_stages",
    //   columns: [
    //     { name: "stage_name", type: "string" }, // LS or SS (special stage)
    //     { name: "is_active", type: "boolean" },
    //     { name: "description", type: "string" },
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
    // tableSchema({
    //   name: "lap_stages",
    //   columns: [
    //     { name: "lap_stage_name", type: "string" }, // wave 1, wave 2, dst
    //     { name: "description", type: "string" },
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
    // tableSchema({
    //   name: "race_category",
    //   columns: [
    //     { name: "race_category_name", type: "string" }, // main open, master a, b, c, d
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
    // tableSchema({
    //   name: "racers",
    //   columns: [
    //     { name: "event_id", type: "string" },
    //     { name: "race_category_id", type: "string", isOptional: true },
    //     { name: "racer_name", type: "string" },
    //     { name: "racer_identification_no", type: "string" },
    //     { name: "racer_bib_number", type: "number" },
    //     { name: "registered_at", type: "number" },
    //     { name: "created_by", type: "string" }, // many to one
    //     { name: "updated_by", type: "string", isOptional: true },
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
    // tableSchema({
    //   name: "race",
    //   columns: [
    //     { name: "event_id", type: "string" }, // many to one (n => 1)
    //     { name: "racer_id", type: "string" }, // one to one (1 => 1)
    //     { name: "race_stages_id", type: "string" }, // many to one (n => 1)
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
    // tableSchema({
    //   name: "race_result",
    //   columns: [
    //     { name: "race_id", type: "string" }, // many to one
    //     { name: "racer_id", type: "string" }, // many to one
    //     { name: "lap_stages_id", type: "string" }, // many to one
    //     { name: "time_result", type: "number" },
    //     { name: "created_by", type: "string" }, // many to one
    //     { name: "updated_by", type: "string", isOptional: true },
    //     { name: "created_at", type: "number" },
    //     { name: "updated_at", type: "number" },
    //   ],
    // }),
  ],
});

export default schema;
