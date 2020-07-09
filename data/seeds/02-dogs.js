exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("dogs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("dogs").insert([
        {
          name: "Test Dog",
          breed: "test breed",
          weight: "15 lbs",
          details: "Best test dog in the whole test world",
          birthday: "04/03/2002",
          userId: "s650Gf8sWlNlsarZHmVUXWaan4I3",
          avatar:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.guidedogs.org%2Fwp-content%2Fuploads%2F2015%2F05%2FDog-Im-Not.jpg&f=1&nofb=1",
        },
      ]);
    });
};
