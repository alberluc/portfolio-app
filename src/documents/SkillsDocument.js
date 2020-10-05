import {gql} from "@apollo/client"

export const GET_SKILLS = gql`
    query GetSkills {
        skills: getSkills {
            name
            level
            isFavorite
            tinyImagePath: imagePath(quality: TINY)
            imagePath: imagePath(quality: NORMAL)
        }
    }
`