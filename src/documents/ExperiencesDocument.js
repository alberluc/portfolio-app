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
                tinyImagePath: imagePath(quality: TINY)
                imagePath: imagePath(quality: NORMAL)
            }
        }
    }
`