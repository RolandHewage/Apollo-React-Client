import { gql } from '@apollo/client'

export const LOAD_FILMS = gql`
query {
    allFilms {
        films {
            title
        }
    }
}
`