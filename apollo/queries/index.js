
import { gql } from 'apollo-boost';

export const GET_PROJECT = gql`
        query Project($id: ID) {
            project (id: $id) { 
                _id,
                title, 
                description, 
                technologies, 
                url 
        }
    }
`

export const GET_PROJECTS = gql`
    query Projects {
        projects { 
            _id, 
            title, 
            description, 
            technologies, 
            url 
        }
    }`

export const ADD_PROJECT = gql`mutation CreateProject {
        createProject(input: {
              title: "new test app",
              description: "new test app",
              technologies: "html, css, javascript, virtual DOM",
              url: "https://vithursan6.github.io/newTestApp/",
              isCurrentlyDeployed: false
        }) {
          _id
          title
          description
          technologies
          url
        }
    }`;

export const PUT_PROJECT = gql`
        mutation UpdateProject($id: ID) {
            updateProject(id: $id, input: {
                  title: "update test app",
                  description: "update test app",
                  technologies: "html, css, javascript, virtual DOM",
                  url: "https://vithursan6.github.io/updatednewTestApp/",
                  isCurrentlyDeployed: true
            }) {
              _id
              title
              description
              technologies
              url
            }
        }`;
        
export const DELETE_PROJECT = gql`
        mutation DeleteProject($id: ID) {
            deleteProject(id: $id)
        }
    `;