export const getStudents=(name) =>{
    let payload;
    return{
        type: 'STUDENTS-LIST',
        payload
    }
}
export const getStudentDetails=(id) =>{
    let payload;
    return{
        type: 'STUDENT-DETAILS',
        payload
    }
}