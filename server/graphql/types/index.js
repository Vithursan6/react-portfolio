
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