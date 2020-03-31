exports.up = function(knex) {
 return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    // Esse cara é para criar a tabela que sera usada
  });
};

exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
  // Esse cara vai excluir a tabela caso a gente queira
};
