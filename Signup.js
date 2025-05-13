import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const[name1, setName1]=useState('')
    const[email, setEmail]=useState('')
    const[datas, setDatas]=useState([])
    const[edit, setEdit]=useState(false)
    const[id, setId]=useState('')


    const navigation=useNavigate()

    const handlePost=()=>{  
        axios.post("http://localhost:5000/data",{name1, email})
          .then(()=>{
            alert("data vilunthuruchu")
            setName1('')
            setEmail('')
          })
          .catch((err)=>{
            alert(`data vilala ${err}`)
          })
    }
    const handleGet=()=>{
        axios.get("http://localhost:5000/data")
        .then((res)=>{
            setDatas(res.data)
        })
        .catch(()=>{
            alert("data not fetched")
        })
    }


    const handlenavigate=()=>{
        navigation("/about")
    }

    const handleEdit=(datas)=>{//{name1:venkat, email:venkat@gmail.com}
        setEdit(true)//edit=true 
        setName1(datas.name1)//name=venkat
        setEmail(datas.email)//email=venkat@gmail.com
        setId(datas.id)//id=60cf
        console.log(datas.id);
        
    }

    const handleupdate=(datas)=>{
        axios.put(`http://localhost:5000/data/${id}`,{name1, email})
        .then(()=>{
            alert("data updated successfully")
            handleGet()
            setName1('')
            setEmail('')
            setEdit(false)
        })
        .catch((err)=>{
            alert(`data not updated,${err}`)
        })
    }

    const handleDelete=(userid)=>{
        axios.delete(`http://localhost:5000/data/${userid}`)
        .then(()=>{
            alert("data deleted successfully")
            handleGet();
        })
        .catch(()=>{
            alert("data not been deleted")
        })
    }


  return (
    <div>
        Name: <input type='text' placezholder='enter name' value={name1} onChange={(e)=>setName1(e.target.value)}/>

        Email:<input type='text' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />

        <button onClick={edit?handleupdate:handlePost}>{edit?'UPDATE':'POST'}</button>
        <button onClick={handleGet}>SHOW</button>
        
        {
            datas.map((i,index)=>(
            <li key={index}>
                NAME:{i.name1} 
                EMAIL:{i.email} 
                <button onClick={()=>handleEdit(i)}>EDIT</button>
                <button onClick={()=>handleDelete(i.id)}>DELETE</button>
            </li>))
        }

        <button onClick={handlenavigate}>NAVIGATE</button>
    </div>
  )
}

export default Signup