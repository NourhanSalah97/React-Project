export const students = (state={},action)=>{
    console.log(state)
    switch(action.type){
        case 'STUDENTS_LIST':{
            return {...state,list:action.payload}
        }

        case 'STUDENTS_DETAILS':{    
            return {...state,details:action.payload}
        }

        case 'CLEAR_STUDENTS_DETAILS':{
            return{...state,details:action.payload}
        }
    }

    return state
}