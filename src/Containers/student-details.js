import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails,clearStudentDetails } from '../Actions'
const baseURL = "http://localhost:3001/students"
const StudentDetails = ({ getStudentDetails,clearStudentDetails, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
        debugger;
        getStudentDetails(id)

        return ()=>{
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    },[])
   
    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div className="d-flex flex-column justify-content-left">
                    <h1>Student's Info: </h1>
                    <div className="col">
                        <h5>ID: {details.id}</h5>
                        <h5>Name: {details.name}</h5>
                        <h5>Age: {details.age}</h5>
                        <h5>Phone: {details.phone}</h5>
                    </div>
                    <button className="btn btn-danger col-1" onClick={()=>{
                        fetch(`${baseURL}/${details.id}`, { method: 'DELETE' })
                        .then(() => {alert('student successfully deleted :)')
                        window.location.replace('/')
                    });
                    }}>Delete</button>
                </div>
            )
        }
        return ''
    }
    return (<div>
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails ,clearStudentDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)