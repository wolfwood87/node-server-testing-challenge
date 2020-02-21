
exports.up = function(knex, Promise) {
    return knex.schema.createTable('meeseeks', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
        tbl.string('quote', 255);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('meeseeks');
};
