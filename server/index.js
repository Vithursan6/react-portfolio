const express = require('express')
const next = require('next')
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//resolvers
const { projectResolvers } = require('./graphql/resolvers');
//types
const { projectTypes } = require('./graphql/types');

app.prepare().then(() => {
  const server = express()


  const schema = buildSchema(`
    ${projectTypes}

      type Query {
        hello: String
        project(id: ID): Project
        projects: [Project]
      }

  `);

  const root = {
    ...projectResolvers
  }

  server.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  }))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})