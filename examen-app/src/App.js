import { Route, Routes } from 'react-router-dom'
import Main from './Main'
import CreateFavouriteList from './CreateFavouriteList'
import CreateVideo from './CreateVideo'
import DeleteFavouriteList from './DeleteFavouriteList'
import DeleteVideo from './DeleteVideo'
import UpdateFavouriteList from './UpdateFavouriteList'
import UpdateVideo from './UpdateVideo'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/CreateFavouriteList" element={<CreateFavouriteList/>}/>
      <Route path="/CreateVideo" element={<CreateVideo/>}/>
      <Route path="/DeleteFavouriteList" element={<DeleteFavouriteList/>}/>
      <Route path="/DeleteVideo" element={<DeleteVideo/>}/>
      <Route path="/UpdateFavouriteList" element={<UpdateFavouriteList/>}/>
      <Route path="/UpdateVideo" element={<UpdateVideo/>}/>
    </Routes>
  )
}

export default App;