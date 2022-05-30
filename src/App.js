import Topbar from "./components/topbar/TopBar";
import Register from './pages/register/Register'
import HomePage from './pages/homepage/HomePage'
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const currentUser = false;
  return (
  <Router>
      <Topbar />  
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>  
      <Routes>
        <Route  path="/register" element={currentUser ? <HomePage /> : <Register />} />
      </Routes> 
      <Routes>
        <Route  path="/login" element={currentUser ? <HomePage /> : <Login />} />
      </Routes> 
      <Routes>
        <Route  path="/post/:id" element={<Single />} />
      </Routes> 
      <Routes>
        <Route  path="/write" element={currentUser ? <Write /> : <Login />} />
      </Routes> 
      <Routes>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes> 
  </Router>
       
  );
}

export default App;