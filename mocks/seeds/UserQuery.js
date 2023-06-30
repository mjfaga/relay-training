function seed(context) {
  context.operation(
    'UserQuery',
    {
      data: {
        user: {
          favoriteFoods: {
            edges: [
              {node: {foodItem: {name: 'Pizza'}}},
              {node: {foodItem: {name: 'Ice Cream'}}},
              {node: {foodItem: {name: 'Tacos'}}},
              {node: {foodItem: {name: 'Burgers'}}},
            ],
          },
        },
      },
    },
    {
      id: 'User:1',
    },
    {
      partialArgs: true,
    }
  );
}

module.exports = seed;
