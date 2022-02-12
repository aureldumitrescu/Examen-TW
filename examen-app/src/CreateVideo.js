import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function CreateVideo(){
    const [id,setId] = useState("")
    const [descriere,setDescriere] = useState("")
    const [titlu,setTitlu] = useState("")
    const [url,setUrl] = useState("")
    const [favouriteListId,setfavouriteListId] = useState("")
    const navigateTo = useNavigate()

    async function createVideo(){
        if(id !== "" && descriere !== "" && url !== ""){
            fetch('http://localhost:8080/api/lists/1/videos', {method: 'post', headers: {'Content-Type':'application/json'}, body: `{"id":${id},"descriere":"${descriere}","titlu":"${titlu}""url":"${url}","favouriteListId":${favouriteListId}}`})
        }
        navigateTo("/")
    }

    return(
        <div>
            <h1>Create Video</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Descriere" onChange={(e)=>setDescriere(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Titlu" onChange={(e)=>setTitlu(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Url" onChange={(e)=>setUrl(e.target.value)}></input>
                <br></br>
                <input type="number" placeholder="favouriteListId" onChange={(e)=>setfavouriteListId(e.target.value)}></input>
                <br></br>
                <button onClick={()=>createVideo()}>Submit</button>
            </div>
        </div>
    )
}

export default CreateVideo