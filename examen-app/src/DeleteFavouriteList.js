import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function DeleteFavouriteList(){
    const [id,setId] = useState("")
    const navigateTo = useNavigate()

    async function deleteFavouriteList(){
        if(id !== ""){
            fetch(`http://localhost:8080/api/lists/${id}`, {method: 'delete'})
        }
        navigateTo("/")
    }
    return(
        <div>
            <h1>Delete Favourite List</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <button onClick={()=>deleteFavouriteList()}>Submit</button>
            </div>
        </div>
    )
}

export default DeleteFavouriteList