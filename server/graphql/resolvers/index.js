
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
      },
      {
        _id: '10004',
        title: 'new tested app',
        description: 'new tested app',
        technologies: 'html, css, javascript, virtual DOM',
        url: 'https://vithursan6.github.io/testing/',
        isCurrentlyDeployed: false
      }
    ]
  }

exports.projectQueries = {
    hello: () => {
        return 'Hello World!'
      },
      project: (root, {id}) => {
        const project = data.projects.find(p => p._id === id)
        return project
      },
      projects: () => {
        return data.projects
      }
}

exports.projectMutations = {
  createProject: (root, {input}) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newProject = {...input};
    newProject._id = _id;
    data.projects.push(newProject);
    return newProject;
  },
  updateProject: (root, {id, input}) => {
    const index = data.projects.findIndex(p => p._id === id);
    const oldProject = data.projects[index];
    const newProject = {...oldProject, ...input};
    data.projects[index] = newProject;
    return newProject;
  },
  deleteProject: (root, {id}) => {
    const index = data.projects.findIndex(p => p._id === id);
    data.projects.splice(index, 1);
    return id;
  }

}