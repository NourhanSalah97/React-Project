import {connect} from 'react-redux'
import Student from '../Components/Student'
import {bindActionCreators} from 'redux'
import {getStudents} from '../Actions'
import {useEffect} from 'react'



const StudentsList=({list,history})=>{
    useEffect(()=>{
        getStudents()
    },[getStudents])
    if(list) {
        if(list.length>0)
        return(
            <div className="alert">
                {list.map((student)=>{
                    return<Student key={student.id} studentInfo={student} />
                })}
            </div>
        )
        return <p>
            Not Found! Search Again.
        </p>
    }
    
    
    return<div>
        Students List
    </div>
    
}
const mapStateToProps=(state)=>{
    return{
        list: state.students.list
    }
}
const mapDispatchToProps=(dispatch)=>{
return bindActionCreators({getStudents},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentsList)