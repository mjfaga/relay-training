function seed(context) {
  context.operation(
    'firstMock',
    {
      data: {
        user: {
          name: 'Mark',
        },
      },
    },
    {userId: '1'},
    {partialArgs: true}
  );
}

module.exports = seed;
