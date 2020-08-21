import {gql} from '@apollo/client'

export const GET_TEXTS = gql`
    query GetTexts {
        getTexts {
            code
            content
        }
    }
`