import React,{useEffect,useState} from "react";
import '../App.css'



const  Mytasks =() =>{
    const [files,setState]= useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/files/',{
            method:"GET",
            headers:{'Content-Type':'application/json',
            Authorization:`Token ${localStorage.getItem("token")}`
        },
           
        })
        .then(data => data.json())
        .then(data =>{
 setState(data)
    console.log(files)
        })
    },[])
        return (
            <div>
                <h1 className="heading">FILEINFO</h1>
                <table border={"1px"} className="table">
                    <tr>
                        <th>Filename</th>
                        <th>Status</th>
                        <th>CreatedBY</th>
                        <th>AssignedTo</th>
                    </tr>
                    {files.map((file)=>{
                       return <tr>
                            <td>{file.fileName}</td>
                            <td>{file.Status}</td>
                            <td>{file.CreatedBy}</td>
                            <td>{file.AssignedTo}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    
    }
export default Mytasks;