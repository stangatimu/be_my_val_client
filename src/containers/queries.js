import gql from "graphql-tag";


export const CREATE_INVITATION = gql`
mutation($name:String!,$alias:String!,$sender:String!){
    Invitation{
      Create(params:{sender:$sender,recepient:{
        name:$name,
        alias:$alias
      }}){
        _id
        recepient{
          name
        }
      }
    }
  }
`;

export const GET_INVITATION_BY_ID = gql`
query($id:ID!){
    Invitation{
      GetByID(_id:$id){
        _id
        sender
        recepient{
          name
          alias
        }
        status
      }
    }
}
`;

export const RESPOND_TO_INVITATION = gql`
mutation($id:ID!,$status:Boolean!){
    Invitation{
      RespondToInvitation(params:{
        _id:$id,
        status:$status,
        comment:"I accept your request!"
      })
    }
  }
`;

export const GET_SENT_INVITAIONS = gql`
query($ids:[ID]!){
  Invitation{
    GetManyByIds(_ids:$ids){
      _id
      status
      recepient{
        name
        alias
      }
      sender
    }
  }
}
`;