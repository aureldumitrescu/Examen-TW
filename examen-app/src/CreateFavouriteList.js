import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function CreateFavouriteList(){
    const [id,setId] = useState("")
    const [descriere,setDescriere] = useState("")
    const [data,setData] = useState("")
    const navigateTo = useNavigate()

    async function createFavouriteList(){
        if(id !== "" && descriere !== ""){
            fetch('http://localhost:8080/api/lists', {method: 'post', headers: {'Content-Type':'application/json'}, body: `{"id":${id},"descriere":"${descriere}","data":"${data}"}`})
        }
        navigateTo("/")
    }

    return(
        <div>
            <h1>Create Favourite List</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Descriere" onChange={(e)=>setDescriere(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Data" onChange={(e)=>setData(e.target.value)}></input>
                <br></br>
                <button onClick={()=>createFavouriteList()}>Submit</button>
            </div>
        </div>
    )
}

export default CreateFavouriteList