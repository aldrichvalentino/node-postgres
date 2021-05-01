exports.seed = async (knex) => {
  await knex('users').del()
  await knex('users').insert([
    { id: 1, first_name: 'Aldrich', last_name: 'Halim' },
    { id: 2, first_name: 'John', last_name: 'Doe' },
    { id: 3, first_name: 'Jokowi', last_name: 'Dodo' }
  ]);

  await knex('products').del()
  await knex('products').insert([
    { id: 1, price: 5000, name: 'Book' },
    { id: 2, price: 5000, name: 'Smartphone' },
    { id: 3, price: 5000, name: 'Laptop' }
  ]);
};
