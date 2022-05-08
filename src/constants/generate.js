const { faker } = require("@faker-js/faker");
const _ = require("lodash");

module.exports = () => {
  return {
    people: _.times(10, (n) => {
      return {
        id: n,
        name: faker.name.findName(),
        email: faker.internet.email(),
      };
    }),
  };
};
