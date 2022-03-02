import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { RadioButtonCheckedSharp } from '@mui/icons-material'

const StudentList = [
    {id:1, name:"Rakesh", age:27, course:"mern", batch:"oct" },
    {id:2, name:"Rakesh", age:27, course:"mern", batch:"oct" },
    {id:3, name:"Rakesh", age:27, course:"mern", batch:"oct" },
    {id:4, name:"Rakesh", age:27, course:"mern", batch:"oct" },
    {id:5, name:"Rakesh", age:27, course:"mern", batch:"oct" },
]

const Table = () => {
    const [data, setData] = useState(StudentList)
    const columns = [
        {title:"id", field:"id"},
        {title:"name", field:"name"},
        {title:"age", field:"age"},
        {title:"course", field:"course"},
        {title:"batch", field:"batch"}
    ]
  return (
    <div className='table'>
     
        <MaterialTable 
         title="student data"
         data={data}
         columns={columns}
         options={{sorting:true, search:false, paging:false}}
         editable={{
             onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                 const updatedRow = [...data,newRow]
                 setData(updatedRow)
                 resolve()
             }),
            //  onRowDelete:selectedROW=>new Promise((resolve,reject)=>{

            //  })
            onRowUpdate:(updateRow,oldRow)=>new Promise((resolve,reject)=>{
                const index = oldRow.tableData.id;
                const updatedRows  = [...data];
                updatedRows[index]=updateRow; 
                setData(updatedRows)
                resolve()
            })
         }}
        //  options={{
        //      actionsColumnIndex:-1
        //  }}
        />

    </div>
  )
}

export default Table