const typeDefs = `
  type Query {
    user(id: ID!): User!
    dog(id: ID!): Dog!
  }
  type Mutation {
    register(data: UserInput!): User!
    editUser(data: UserInput!): User!
    addContact(data: AddContactInput!): Contact!
    editContact(data: EditContactInput!): Contact!
    deleteContact(id: ID!): Boolean!
    addDog(data: AddDogInput!): Dog!
    editDog(data: EditDogInput!): Dog!
    deleteDog(id: ID!): Boolean!
    addDogPhoto(data: DogPhotoInput!): DogPhoto!
    deleteDogPhoto(id: ID!): Boolean!
  }
  type User {
    id: ID!
    username: String!
    email: String
    contacts: [Contact]!
    dogs: [Dog]!
  }
  type Dog {
    id: ID!
    name: String!
    breed: String!
    weight: String!
    details: String!
    birthday: String!
    avatar: String!
    photos: [DogPhoto]!
  }
  type Contact {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }
  type DogPhoto {
    id: ID!
    dogId: Int!
    image: String!
  }
  input UserInput {
    id: ID!
    username: String!
    email: String!
  }
  input AddDogInput {
    userId: String!
    name: String!
    breed: String!
    weight: String!
    details: String!
    birthday: String!
    avatar: String!
  }
  input EditDogInput {
    id: ID!
    userId: String!
    name: String!
    breed: String!
    weight: String!
    details: String!
    birthday: String!
    avatar: String!
  }
  input AddContactInput {
    userId: String!
    name: String!
    email: String!
    phone: String!
  }
  input EditContactInput {
    id: ID!
    userId: String!
    name: String!
    email: String
    phone: String!
  }
  input AddDogPhoto {
    dogId: Int!
    image: String!
  }
  input EditDogPhoto {
    id: ID!
    dogId: Int!
    image: String!
  }
  input DogPhotoInput {
    dogId: Int!
    image: String!
  }
`;

module.exports = typeDefs;
