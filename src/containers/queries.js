import gql from "graphql-tag";


export const CREATE_INVITATION = gql`
mutation($name:String!,$alias:String!,$sender:String!){
    Invitation{
      Create(params:{sender:$sender,recepient:{
        name:$name,
        alias:$alias
      }}){
        _id
      }
    }
  }
`;