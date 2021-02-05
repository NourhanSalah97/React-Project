import { bindActionCreators } from "redux"

export const studentsList =(state=null,action)=>{
    console.log(action)
    if(action.type==="STUDENT_LIST"){
        return action.payload
    }
    return state ;
}