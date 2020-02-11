export const getInvitationsFromLocalStorage = ()=>{
    if(global.localStorage){
        try{
            let ids = JSON.parse(global.localStorage.getItem("invitations")) || [];
            return ids;
        }catch(e){
            return [];
        }
    }
}
export const saveInvitationToLocalStorage = (id)=>{
    if(global.localStorage){
        let ids = getInvitationsFromLocalStorage();
        global.localStorage.setItem("invitations", JSON.stringify([id,...ids]));
    }
}