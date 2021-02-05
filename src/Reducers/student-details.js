export const studentDetails = (state = null, action) => {
    if (action.type === "STUDENTS_DETAILS"){
    console.log('in reducer',action)
        return action.payload}
    return state
}