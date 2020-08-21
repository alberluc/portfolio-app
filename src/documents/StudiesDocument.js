import {gql} from "@apollo/client"

export const GET_STUDIES = gql`
    query GetStudies {
        getStudies {
            name
            degree
            fromYear
            toYear
            school {
                name
                location
            }
        }
    }
`