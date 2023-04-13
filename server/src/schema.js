const gql = require("graphql-tag");

const typeDefs = gql`
type Query {
    "Get list of non-null Tracks"
    tracksForHome: [Track!]!
}

"""
A track is a group of modules that
teaches a specific topic
"""
type Track {
    id: ID!
    "A track's title"
    title: String!
    "A tracks illustration image to display on the card as thumbnail"
    thumbnail: String
    "A track's length represents approximate time it can take to complete the track in minutes"
    length: Int
    "A number of modules this track contains"
    modulesCount: Int
    "A track's main author "
    author: Author!
   
}

"Author of a complete Track"
type Author {
    id: ID!
    "Author's First and Last Name"
    name: String!
    "Author's profile pictire url"
    photo: String

}
`;

module.exports = typeDefs;