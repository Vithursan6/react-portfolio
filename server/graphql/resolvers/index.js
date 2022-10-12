
const data = {
    projects: [
      {
        _id: '10001',
        title: 'ecomm app',
        description: 'ecommmerce react spa app',
        technologies: 'react, node, html, css, mongodb',
        url:'https://portside.herokuapp.com/',
        isCurrentlyDeployed: true
      },
      {
        _id: '10002',
        title: 'tech blog app',
        description: 'tech blog app',
        technologies: 'express, node, html, css, mongodb',
        url: 'https://glacial-brushlands-88300.herokuapp.com/login',
        isCurrentlyDeployed: true
      },
      {
        _id: '10003',
        title: 'crypto dash app',
        description: 'crypto dashboard app',
        technologies: 'html, css, javascript, virtual DOM',
        url: 'https://vithursan6.github.io/crypto-dash/',
        isCurrentlyDeployed: true
      }
    ]
  }

exports.projectResolvers = {
    hello: () => {
        return 'Hello World!'
      },
      project: ({id}) => {
        const project = data.projects.find(p => p._id === id)
        return project
      },
      projects: () => {
        return data.projects
      }

}