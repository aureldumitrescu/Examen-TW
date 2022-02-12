import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function Main() {

    const [firstFilter, setfirstFilter] = useState("")
    const [secondFilter, setSecondFilter] = useState("")
    const [sortType, setsortType] = useState("")
    const [sortValue, setsortValue] = useState("")
    const navigateTo = useNavigate()

    async function updateFavouriteLists() {
        let table = document.getElementById("table")
        table.innerHTML = ""
        let tablerow = document.createElement("tr")

        let tableheadId = document.createElement("th")
        tableheadId.innerHTML = "Id"
        tablerow.appendChild(tableheadId)

        let tableheadDescriere = document.createElement("th")
        tableheadDescriere.innerHTML = "Descriere"
        tablerow.appendChild(tableheadDescriere)

        let tableheadData = document.createElement("th")
        tableheadData.innerHTML = "Data"
        tablerow.appendChild(tableheadData)

        table.appendChild(tablerow)

        let customString
        if (sortType === "Ascendent") {
            customString = "+"
        } else if (sortType === "Descendent") {
            customString = "-"
        }
        customString += sortValue

        let dataFavouriteLists
        if (firstFilter === "" && secondFilter === "") {
            dataFavouriteLists = await fetch(`http://localhost:8080/api/lists`, { headers: { 'X-Sort': `${customString}` } })
        } else if (firstFilter !== "" && secondFilter === "") {
            dataFavouriteLists = await fetch(`http://localhost:8080/api/lists?filter=${firstFilter}`)
        } else if (firstFilter === "" && secondFilter !== "") {
            dataFavouriteLists = await fetch(`http://localhost:8080/api/lists?filter=${secondFilter}`)
        } else if (firstFilter !== "" && secondFilter !== "") {
            dataFavouriteLists = await fetch(`http://localhost:8080/api/lists?filter=${firstFilter},${secondFilter}`)
        }

        let dataFavouriteListsJson = await dataFavouriteLists.json()

        let dataVideos = await fetch(`http://localhost:8080/api/lists/1/videos`)
        let dataVideosJson = await dataVideos.json()

        for (let i = 0; i < dataFavouriteListsJson.length; i++) {
            tablerow = document.createElement("tr")

            let tabledataId = document.createElement("td")
            tabledataId.innerHTML = dataFavouriteListsJson[i].id
            tablerow.appendChild(tabledataId)

            let tabledataDescriere = document.createElement("td")
            tabledataDescriere.innerHTML = dataFavouriteListsJson[i].descriere
            tablerow.appendChild(tabledataDescriere)

            let tabledataData = document.createElement("td")
            tabledataData.innerHTML = dataFavouriteListsJson[i].data
            tablerow.appendChild(tabledataData)

            table.appendChild(tablerow)

            ///////////////////////////////

            let tablevideo = document.createElement("table")
            tablevideo.setAttribute("id", "table" + i)
            let tablerowvideo = document.createElement("tr")

            let tableheadvideoId = document.createElement("th")
            tableheadvideoId.innerHTML = "Id"
            tablerowvideo.appendChild(tableheadvideoId)

            let tableheadvideoDescriere = document.createElement("th")
            tableheadvideoDescriere.innerHTML = "Descriere"
            tablerowvideo.appendChild(tableheadvideoDescriere)

            let tableheadvideoTitlu = document.createElement("th")
            tableheadvideoTitlu.innerHTML = "Titlu"
            tablerowvideo.appendChild(tableheadvideoTitlu)

            let tableheadvideoURL = document.createElement("th")
            tableheadvideoURL.innerHTML = "URL"
            tablerowvideo.appendChild(tableheadvideoURL)

            tablevideo.appendChild(tablerowvideo)
            table.appendChild(tablevideo)

            for (let j = 0; j < dataVideosJson.length; j++) {
                if (dataFavouriteListsJson[i].id === dataVideosJson[j].favouriteListId) {
                    tablerowvideo = document.createElement("tr")

                    let tabledatavideoId = document.createElement("td")
                    tabledatavideoId.innerHTML = dataVideosJson[j].id
                    tablerowvideo.appendChild(tabledatavideoId)

                    let tabledatavideoTitlu = document.createElement("td")
                    tabledatavideoTitlu.innerHTML = dataVideosJson[j].titlu
                    tablerowvideo.appendChild(tabledatavideoTitlu)

                    tablevideo.appendChild(tablerowvideo)
                }
            }
        }
    }

    return (
        <div>
            <div>
                <input id="firstfilter" type="text" placeholder="First filter" onChange={(e) => setfirstFilter(e.target.value)}></input>
                <input id="secondfilter" type="text" placeholder="Second filter" onChange={(e) => setSecondFilter(e.target.value)}></input>
                <select id="sortvalue" onChange={(e) => setsortValue(e.target.value)}>
                    <option>id</option>
                    <option>descriere</option>
                    <option>data</option>
                </select>
                <select id="sorttype" onChange={(e) => setsortType(e.target.value)}>
                    <option>Ascendent</option>
                    <option>Descendent</option>
                </select>
                <button onClick={() => updateFavouriteLists()}>Search</button>
                <br></br>
                <label>FavouriteLists:</label>
            </div>
            <div>
                <table id="table">

                </table>
            </div>
            <div>
                <button onClick={()=>navigateTo(`/createFavouriteList`)}>Create favourite list</button>
                <button onClick={()=>navigateTo(`/createVideo`)}>Create video</button>
                <br></br>
                <button onClick={()=>navigateTo(`/updateFavouriteList`)}>Update favourite list</button>
                <button onClick={()=>navigateTo(`/updateVideo`)}>Update video</button>
                <br></br>
                <button onClick={()=>navigateTo(`/deleteFavouriteList`)}>Delete favourite list</button>
                <button onClick={()=>navigateTo(`/deleteVideo`)}>Delete video</button>
            </div>
        </div>
    );
}

export default Main;