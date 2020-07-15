exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: "s650Gf8sWlNlsarZHmVUXWaan4I3",
          username: "Test User",
          email: "test@gmail.com",
          phone: "(555) 555-5555",
        },
      ]);
    });
};
