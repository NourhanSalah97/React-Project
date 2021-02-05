

export const StudentsList =(state=null,action)=>{
    console.log(action)
    if(action.type==="STUDENT_LIST"){
        return action.payload
    }
    return state ;
}