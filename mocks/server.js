const GraphqlMockingService = require('@wayfair/gqmock').default;
const fs = require('fs');

const schema = fs.readFileSync('./src/schema.graphql', 'utf8');

(async () => {
  const mockingService = new GraphqlMockingService({port: 5001});

  await mockingService.start();
  await mockingService.registerSchema(schema);
})();
