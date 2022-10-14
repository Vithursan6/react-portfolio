
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