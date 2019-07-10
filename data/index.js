module.exports = () => {
  const faker = require('faker');

  const data = { events: [] };
  // Create 300 users
  for (let i = 0; i < 300; i++) {
    data.events.push({
      id: i,
      date: faker.date.past(),
      description: faker.lorem.paragraph(),
      language: 'en',
      category1: faker.address.country(),
      category2: faker.lorem.word()
    });
  }
  return data;
};
