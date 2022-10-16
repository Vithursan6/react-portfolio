
const projectFields = `
    title: String
    description: String
    technologies: String
    url: String
    isCurrentlyDeployed: Boolean
`
exports.projectTypes = `
    type Project {
        _id: ID
        ${projectFields}
    }

    input ProjectInput {
        _id: ID
        ${projectFields}

    }
`
exports.userTypes = `

    type User {
        _id: ID
        avatar: String
        username: String
        name: String
        email: String
        role: String
    }

    input SignUpInput {
        avatar: String
        username: String!
        name: String
        email: String!
        password: String!
        passwordConfirmation: String!
    }

    input SignInInput {
        email: String!
        password: String!
    }
`