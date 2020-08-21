import {gql} from "@apollo/client"

export const GET_PROJECT = gql`
    query GetProject($_id: ID!) {
        getProject(_id: $_id) {
            name
            description
            duration
            imagePath
            skills {
                name
            }
        }
    }
`


export const GET_PROJECTS = gql`
    query GetProjects {
        projects: getProjects {
            _id
            name
            description
            duration
            imagePath
            skills {
                name
                level
                imagePath
            }
            context {
                __typename
                ... on Experience {
                    name
                    company {
                        name
                    }
                }
                ... on Study {
                    name
                    school {
                        name
                    }
                }
            }
        }
    }
`