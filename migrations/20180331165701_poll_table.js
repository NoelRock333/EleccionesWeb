
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('election_types', function (t) {
            // Tipos de elección (candidaturas)
            t.increments('id').primary();
            t.string('identifier');
            t.string('name');
            t.string('description');
            t.string('display_name');
        })
        .createTable('options', function (t) {
            // Partidos politico, coaliciones o candidatos a elegir
            t.increments('id').primary();
            t.string('identifier');
            t.string('name');
            t.string('description');
            t.string('display_name');
        })
        .createTable('poll', function (t) {
            t.increments('id').primary();
            t.string('poll_uuid', 25);
            t.integer('pollster_id').references('users.id');
            t.integer('election_type_id').references('election_types.id'); // [presidente, diputado federal, diputado local, senador]
            t.integer('option_id').references('options.id'); // [morena, pri, pan, prd, coalicion por mexico, mexico al frente, frente comun]

            t.timestamps();
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('poll')
        .dropTableIfExists('options')
        .dropTableIfExists('election_types');
};
