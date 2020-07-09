exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("dog-photos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("dog-photos").insert([
        {
          dogId: 1,
          image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.animalfacts.us%2Fwp-content%2Fuploads%2F2017%2F06%2Fdownload-1.jpg&f=1&nofb=1",
        },
      ]);
    });
};
