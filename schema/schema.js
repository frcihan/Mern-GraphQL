const Book = require("../models/BookModel");

const { 
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        title: { type: GraphQLString },
        subtitle: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        category: { type: GraphQLString },
        pages: { type: GraphQLInt },
        published: { type: GraphQLString },
    })
})


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery, 
});