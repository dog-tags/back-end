exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("contact")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("contact").insert([
        {
          name: "Test Contact",
          email: "testContact@gmail.com",
          phone: "(555) 555 - 5555",
          userId: "s650Gf8sWlNlsarZHmVUXWaan4I3",
        },
      ]);
    });
};
