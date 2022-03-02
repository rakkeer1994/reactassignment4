// import React, { useState } from 'react'
// const AddStudent = () => {

// const [name, setName] = useState({
//   myName: "", myAge: "", myCourse: "", myBatch: ""})



// const eventUp = (event) =>{
//      setName{myName:event.target.value}
// }
//  const eventUp2 = (event)=>{Age:event.target.value}
//  const eventUp3 = (event)=>{myCourse:event.target.value}
//  const eventUp4 = (event)=>{myBatch:event.target.value}
//    const onSubmits = (e) =>{
//               e.preventDefault()
//               console.log(name)
//     }
//   return (
//       <>
//     <div className='inputHandle'>
//     <form onSubmit={onSubmits}>
//     <input type='text' name='name'  placeholder='enter name' onChange={eventUp}/>
//     <input type='text' name='age'  placeholder='enter age' onChange={eventUp2}/>
//     <input type='text' name='course' placeholder='enter course' onChange={eventUp3}/>
//     <input type='text' name='batch' placeholder='enter batch' onChange={eventUp4}/>
//     <button type='submit'>Cancel</button>
//      <button type='submit'>Submit</button>
//     </form>
//     </div>

//     </>
//   )
// }

// export default AddStudent

// import React, { Component } from 'react'

// export class AddStudent extends Component {
//     state = {
//         name: "",
//         age: "",
//         course: "",
//         employee: []
//     }
//     eventUp=(event)=>{
//         this.setState({[event.target.name]:event.target.value})
//     }

//     ButtonSubmit=(e)=>{
//         e.preventDefault()
//         const fillObj = {
//             name: this.state.name,
//             age: this.state.age,
//             course: this.state.course
//         }
//         const tempEmployee = this.state.employee
//         tempEmployee.push(fillObj)
//         this.setState({employee: tempEmployee})
//     }
//     render() {
//         console.log(this.state.employee)
//         return (
//             <>
//             <div className='body'>
//                <div className='formDiv'>
//                 <h1>EmployeeFeedBack From</h1>
//                <form>    
//                      <span>Name:</span>
//                      <input name='name' id='name' type="text" value={this.state.name}  onChange={this.eventUp}/> <br></br>

//                      <span>Department:</span>
//                      <input name='age' id='age' type="text" value={this.state.age} onChange={this.eventUp}/> <br></br>

//                      <span>Rating:</span>
//                      <input name='course' id='course' type="text" value={this.state.course} onChange={this.eventUp}/> <br></br>

//                      <button onClick={this.ButtonSubmit}>Submit</button> 
//                  </form>
//                 </div>
//                 <div className='displyBlock'>
//                 {this.state.employee.map((val, index)=>{
//                      return <div className='displayEmp'>Name: {val.name} <br></br> Department: {val.age} <br></br> Rating:{val.course}</div>
//                 })}
//                 </div>
//                 </div>  

//           </>   
//         )
//       }
// }

// export default AddStudent
import React, { Component } from 'react'
import Student from './Student';
class AddStudent extends Component {
  state = {
    name: "",
    age: "",
    course: "",
    batch: "",
    employee: [],
    redirect: true
  }
  eventUp = (event) => {
    this.setState({ [event.target.name]: event.target.value, });
  }

  ButtonSubmit = (e) => {
    e.preventDefault()
    this.setState({
      employee: [...this.state.employee, {
        name: this.state.name,
        age: this.state.age,
        course: this.state.course,
        batch: this.state.batch
      }],
      name: "",
      age: "",
      course: "",
      batch: "",
      redirect: !this.state.redirect
    })
  }

  goBack = () => {
    this.setState({ redirect: !this.state.redirect })
  }
  render() {
    console.log(this.state.employee)
    return (
      <>
        <div className='body'>
          {this.state.redirect && (<>
            <div className='formDiv'>
              <h1>EmployeeFeedBack From</h1>
              <form onSubmit={this.ButtonSubmit} >
                <span>Name:</span>
                <input name='name' id='name' type="text" value={this.state.name} onChange={this.eventUp} /> <br></br>

                <span>Age:</span>
                <input name='age' id='age' type="text" value={this.state.age} onChange={this.eventUp} /> <br></br>

                <span>Course:</span>
                <input name='course' id='course' type="text" value={this.state.course} onChange={this.eventUp} /> <br></br>

                <span>Batch:</span>
                <input name='batch' id='batch' type="text" value={this.state.batch} onChange={this.eventUp} /> <br></br>

                <button type='Submit' >Submit</button>

              </form>
            </div>
          </>)}

          {!this.state.redirect && (<Student fillData={this.state.employee} backFunc={this.goBack} />)}

        </div>

      </>

    )
  }
}

export default AddStudent


