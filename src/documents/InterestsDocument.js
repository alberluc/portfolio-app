import {gql} from "@apollo/client"

export const GET_INTERESTS = gql`
  query GetInterests {
      getInterests {
          name
          description
          imagePath
      }
  }
`