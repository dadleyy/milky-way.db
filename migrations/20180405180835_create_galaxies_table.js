const debug = require('debug')('milky-way:create-galaxies');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('galaxies', function(table) {
    debug('creating galaxies table');
    table.increments();
    table.string('name').unique();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  debug('dropping galaxies table');
  return knex.schema.dropTable('galaxies');
};
