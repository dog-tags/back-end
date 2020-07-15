const db = require("../data/dbConfig");
const { ValidationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    async user(_, { id }) {
      const user = await db("users").where({ id }).first();
      if (!user)
        throw new ValidationError("That no user exists with that id. 💀");
      return user;
    },
    async dog(_, { id }) {
      const dog = await db("dogs").where({ id }).first();
      if (!dog)
        throw new ValidationError("That no user exists with that id. 💀");
      return dog;
    },
  },
  Mutation: {
    async register(_, { data }) {
      const user = await db("users").insert(data).returning("*");
      if (!user) throw new ValidationError("Something went wrong... 💀");
      return user[0];
    },
    async editUser(_, { data }) {
      const user = await db("users")
        .update(data)
        .where({ id: data.id })
        .returning("*");
      if (!user) throw new ValidationError("Something went wrong... 💀");
      return user[0];
    },
    async addContact(_, { data }) {
      const contact = await db("contact").insert(data).returning("*");
      if (!contact) throw new ValidationError("Something went wrong... 💀");
      return contact[0];
    },
    async editContact(_, { data }) {
      const contact = await db("contact")
        .update(data)
        .where({ id: data.id })
        .returning("*");
      if (!contact) throw new ValidationError("Something went wrong... 💀");
      return contact[0];
    },
    async deleteContact(_, { id }) {
      const contact = await db("contact").where({ id }).del();
      if (!contact) return false;
      return true;
    },
    async addDog(_, { data }) {
      const dog = await db("dogs").insert(data).returning("*");
      if (!dog) throw new ValidationError("Something went wrong... 💀");
      return dog[0];
    },
    async editDog(_, { data }) {
      const dog = await db("dogs")
        .update(data)
        .where({ id: data.id })
        .returning("*");
      if (!dog) throw new ValidationError("Something went wrong... 💀");
      return dog[0];
    },
    async deleteDog(_, { id }) {
      const dog = await db("dogs").where({ id }).del();
      if (!dog) return false;
      return true;
    },
    async addDogPhoto(_, { data }) {
      const dog = await db("dog-photos").insert(data).returning("*");
      if (!dog) throw new ValidationError("Something went wrong... 💀");
      return dog[0];
    },
    async deleteDogPhoto(_, { id }) {
      const dog = await db("dog-photos").where({ id }).del();
      if (!dog) return false;
      return true;
    },
  },
  User: {
    async contacts({ id }) {
      return await db("contact").where({ userId: id });
    },
    async dogs({ id }) {
      return await db("dogs").where({ userId: id });
    },
  },
  Dog: {
    async photos({ id }) {
      return await db("dog-photos").where({ dogId: id });
    },
    async contacts({ userId }) {
      const owner = await db("users").where({ id: userId }).first();

      const ownerContact = [
        {
          id: owner.id,
          name: owner.username,
          email: owner.email,
          phone: owner.phone,
        },
      ];

      const contacts = await db("contact").where({ userId });

      return ownerContact.concat(contacts);
    },
  },
};

module.exports = resolvers;
