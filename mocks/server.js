const GraphqlMockingService = require('@wayfair/gqmock').default;
const path = require('path');
const fs = require('fs');

const schema = fs.readFileSync('./src/schema.graphql', 'utf8');
const seedPath = path.join(process.cwd(), './mocks/seeds/');

(async () => {
  const mockingService = new GraphqlMockingService({port: 5001});

  await mockingService.start();
  await mockingService.registerSchema(schema);

  const context = mockingService.createContext('1');

  // load files from /seeds directory and execute the seed function
  fs.readdirSync(seedPath).forEach((file) => {
    const seed = require(path.join(seedPath, file));
    seed(context);
  });
})();
