
import { Link } from 'react-router-dom'
import Table from './Table'


import React, { Component } from 'react'

 class Student extends Component {
  render(props) {
    const values = this.props.fillData
    return (
      <>
      <div className='container'>
      <h1>Students Details</h1> 
      <button className='addlist'>Add More</button>
      </div>
       <Table />
      {/* <div className='stuTable'>
      <table>
         <tr>
           <td>Name</td>
           <td>Age</td>
           <td>Course</td>
           <td>Batch</td>
           <td>Change</td>
           <td><Link to='/addstudent'>edit</Link> </td>
         </tr>
       
        {values.length>0 && <tr>
        <td>{values[0].name}</td>
        <td>{values[0].deptt}</td>
        <td>{values[0].rating}</td>
        <td><Link to='/addstudent'>edit</Link> </td>
         </tr>}
        
          {values.length>0 && ( values.map((val)=>(
            <tr>
             <td>{val.name}</td> 
             <td><Link to='/addstudent'>edit</Link> </td>
           </tr>
          )))} 

       </table>
      </div> */}
     </>
    )
  }
}

export default Student
