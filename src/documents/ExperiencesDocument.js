import {gql} from "@apollo/client"

export const GET_EXPERIENCES = gql`
    query getExperiences {
        getExperiences {
            name
            description
            from
            to
            company {
                name
                location
                webSiteUrl
                imagePath
            }
        }
    }
`