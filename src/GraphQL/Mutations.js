import { gql } from '@apollo/client'

export const ADD_USER = gql`
    query {
        allFilms {
            films {
                title
            }
        }
    }
`