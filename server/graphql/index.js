const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const { projectQueries, projectMutations, userMutations } = require('./resolvers');
const { projectTypes, userTypes } = require('./types');
const { buildAuthContext } = require('./context/index');

//Graphql Models
const Project = require('./models/Project');
const User = require('./models/User');




exports.createApolloServer = () => {

    const typeDefs = gql(`
        ${projectTypes}
        ${userTypes}

        type Query {
        project(id: ID): Project
        projects: [Project]
        }

        type Mutation {
        createProject(input: ProjectInput): Project
        updateProject(id: ID, input: ProjectInput): Project
        deleteProject(id: ID): ID
        
        signUp(input: SignUpInput): String
        signIn(input: SignInInput): User
        signOut: String
    
    }`);

    const resolvers = {
        Query: {
        ...projectQueries
        },
        Mutation: {
        ...projectMutations,
        ...userMutations
        }
    }

    const apolloServer =  new ApolloServer({
        typeDefs, resolvers,
        context: () => ({
            ...buildAuthContext(),
        models: {
            Project: new Project(mongoose.model('Project')),
            User: new User(mongoose.model('User'))
        }
        })
    })

    return apolloServer;

}