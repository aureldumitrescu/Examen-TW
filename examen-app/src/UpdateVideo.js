import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function UpdateVideo(){
    const [id,setId] = useState("")
    const [descriere,setDescriere] = useState("")
    const [titlu,setTitlu] = useState("")
    const [url,setUrl] = useState("")
    const navigateTo = useNavigate()

    async function updateVideo(){
        if(id!==""){
            fetch(`http://localhost:8080/api/lists/1/videos/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"id":${id}}`})  
        }
        if(descriere!==""){
            fetch(`http://localhost:8080/api/lists/1/videos/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"descriere":"${descriere}"}`})  
        }
        if(titlu!==""){
            fetch(`http://localhost:8080/api/lists/1/videos/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"titlu":"${titlu}"}`})  
        }
        if(url!==""){
            fetch(`http://localhost:8080/api/lists/1/videos/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"url":"${url}"}`})  
        }
        navigateTo("/")
    }

    return(
        <div>
            <h1>Update Video</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Descriere" onChange={(e)=>setDescriere(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Titlu" onChange={(e)=>setTitlu(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Url" onChange={(e)=>setUrl(e.target.value)}></input>
                <br></br>
                <button onClick={()=>updateVideo()}>Submit</button>
            </div>
        </div>
    )
}

export default UpdateVideo