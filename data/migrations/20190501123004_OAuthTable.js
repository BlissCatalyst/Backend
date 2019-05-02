exports.up = function (knex) {
  return knex.schema.createTable("users", user => {
    user.increments("id");
    user
      .string("name", 128)
      .notNullable()
    user.string("email", 128).unique();
    user.string("provider");
    user.integer("provider_id");
    user.string("provider_pic");
    user.string("token");
    user.boolean("patreon_support").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
