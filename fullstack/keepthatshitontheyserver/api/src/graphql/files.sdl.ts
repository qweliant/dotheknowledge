export const schema = gql`
  type File {
    id: Int!
    name: String!
    size: Int!
    secret: String!
    contentType: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    url: String!
  }

  type Query {
    files: [File!]! @requireAuth
    file(id: Int!): File @requireAuth
  }

  input CreateFileInput {
    name: String!
    size: Int!
    secret: String!
    contentType: String!
    url: String!
  }

  input UpdateFileInput {
    name: String
    size: Int
    secret: String
    contentType: String
    url: String
  }

  type Mutation {
    createFile(input: CreateFileInput!): File! @requireAuth
    updateFile(id: Int!, input: UpdateFileInput!): File! @requireAuth
    deleteFile(id: Int!): File! @requireAuth
  }
`
