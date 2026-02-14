import {Route , BrowserRouter as Router , Routes} from "react-router-dom" 
import LandingPage from './pages/landing'
import './App.css'
import Authentication from "./pages/authenticatio"
import { AuthProvider } from "./contexts/AuthContext.jsx"

import VideoMeetComponent from "./pages/vedioMeet.jsx"
import HomeComponent from "./pages/homeComponent.jsx"
import HistoryComponent from "./pages/history.jsx"


function App() {

  return (
    <>
    <Router>
    
    <AuthProvider>
      <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}/>
            <Route path="/auth" element ={<Authentication></Authentication>}/>
           <Route path="/home" element={<HomeComponent></HomeComponent>}/>
           <Route path="/history" element = {<HistoryComponent></HistoryComponent>}/>
            <Route path='/:url' element={<VideoMeetComponent></VideoMeetComponent>}/>
      </Routes>
      </AuthProvider>

    </Router>
     
    </>
  )
}

export default App
