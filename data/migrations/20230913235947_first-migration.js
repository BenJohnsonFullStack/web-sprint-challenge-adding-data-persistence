/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("project_resource_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
