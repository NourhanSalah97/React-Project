import {useRef} from 'react'
import {getStudents} from '../Actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Search =(props)=>{
    const name=useRef()
    const searchByName=()=>{
        console.log(name.current.value)
       props.getStudents(name.current.value)
    }
    return <div className=" text-center row">
        <div className="form-group text-center col-4">
        <input ref={name} type="text" placeholder="Enter Student Name" className="form-control text-center"/>
        </div>
        <div className="form-group">
        <input type="button" value="Search" className="btn btn-primary" onClick={searchByName}
            
        />
        </div>
        
      
    </div>
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({getStudents},dispatch)
}
export default connect(null,mapDispatchToProps)(Search) 