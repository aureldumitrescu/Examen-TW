import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function UpdateFavouriteList(){
    const [id,setId] = useState("")
    const [descriere,setDescriere] = useState("")
    const [data,setData] = useState("")
    const navigateTo = useNavigate()

    async function updateFavouriteList(){
        if(id!==""){
            fetch(`http://localhost:8080/api/lists/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"id":${id}}`})  
        }
        if(descriere!==""){
            fetch(`http://localhost:8080/api/lists/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"descriere":"${descriere}"}`})  
        }
        if(data!==""){
            fetch(`http://localhost:8080/api/lists/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"data":"${data}"}`})  
        }
        navigateTo("/")
    }

    return(
        <div>
            <h1>Update Favourite List</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Descriere" onChange={(e)=>setDescriere(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Data" onChange={(e)=>setData(e.target.value)}></input>
                <br></br>
                <button onClick={()=>updateFavouriteList()}>Submit</button>
            </div>
        </div>
    )
}

export default UpdateFavouriteList