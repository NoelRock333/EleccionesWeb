
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('municipalities').del()
    .then(function () {
      // Inserts seed entries
      return knex('municipalities').insert([
        { id: 1, name: 'Colima', identifier: 'COLIMA' },
        { id: 2, name: 'Villa de Álvarez', identifier: 'VDEA' },
        { id: 3, name: 'Manzanillo', identifier: 'MANZA' },
        { id: 4, name: 'Tecomán', identifier: 'TECO' },
        { id: 5, name: 'Comala', identifier: 'COMALA' },
        { id: 6, name: 'Cuauhtémoc', identifier: 'CUAU' },
        { id: 7, name: 'Coquimatlán', identifier: 'COQUI' },
        { id: 8, name: 'Armería', identifier: 'ARMERIA' },
        { id: 9, name: 'Minatitlán', identifier: 'MINA' },
        { id: 10, name: 'Ixtlahuacan', identifier: 'IXTLA' }
      ]);
    });
};
