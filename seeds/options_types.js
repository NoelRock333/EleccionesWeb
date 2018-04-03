
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('election_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('election_types').insert([
        { id: 1, name: 'Presidencial', identifier: 'PRESIDENTE' },
        { id: 2, name: 'Diputado federal', identifier: 'DIPUTADO1' },
        { id: 3, name: 'Diputado Local', identifier: 'DIPUTADO2' },
        { id: 4, name: 'Presidente Municipal', identifier: 'MUNICIPAL' },
        { id: 5, name: 'Alcalde', identifier: 'ALCALDE' }
      ]);
    });
};
