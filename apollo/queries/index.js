
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

export const ADD_PROJECT = gql`
        mutation CreateProject(
          $title: String ,
          $description: String,
          $technologies: String,
          $url: String,
          $isCurrentlyDeployed: Boolean
        ) {
        createProject(input: {
              title: $title,
              description: $description,
              technologies: $technologies,
              url: $url,
              isCurrentlyDeployed: $isCurrentlyDeployed
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

//AUTH Queries Start

export const SIGN_UP = gql`
        mutation SignUp(
            $avatar: String
            $email: String!
            $username: String!
            $password: String!
            $passwordConfirmation: String!
        ) {
            signUp(input: {
                avatar: $avatar
                username: $username
                email: $email
                password: $password
                passwordConfirmation: $passwordConfirmation
            })
        }
`

export const SIGN_IN = gql`
  mutation SignIn(
    $email: String!
    $password: String!
  ) {
    signIn(input: {
      email: $email
      password: $password
    }) {
      _id
      username
      role
      avatar
    }
  }
`
export const SIGN_OUT = gql`mutation SignOut{ signOut}`

export const GET_USER = gql`
  query User{
    user {
      _id
      username
      role
    }
  }
`





//AUTH Queries End