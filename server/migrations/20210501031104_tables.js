exports.up = async (knex) => {
  await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
  })

  await knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.decimal('price').notNullable();
    table.string('name', 1000).notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("products")
  await knex.schema.dropTable("users");
};
