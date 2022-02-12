import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function DeleteVideo(){
    const [id,setId] = useState("")
    const navigateTo = useNavigate()

    async function deleteVideo(){
        if(id !== ""){
            fetch(`http://localhost:8080/api/lists/1/videos/${id}`, {method: 'delete'})
        }
        navigateTo("/")
    }
    return(
        <div>
            <h1>Delete Video</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <button onClick={()=>deleteVideo()}>Submit</button>
            </div>
        </div>
    )
}

export default DeleteVideo