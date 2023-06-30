function seed(context) {
  context.operation('UserListQuery', {
    data: {
      users: {
        $length: 5,
        $0: {id: 'User:1'},
      },
    },
  });
}

module.exports = seed;
