
const baseURL="http://localhost:3001/students?name=";
export const getStudents= async (name) =>{
    let payload= await fetch(`${baseURL}${name}`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        return data
    })
    .catch((err)=>{
       console.log(err)
    })
    return{
        type: 'STUDENTS-LIST',
        payload
    }
}
export const getStudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_DETAILS',
        payload
    }

}
export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_STUDENTS_DETAILS',
        payload:null
    }
}
