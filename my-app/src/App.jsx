import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Initial from './views/initial'
import Boton from './components/Boton'
import Profile from './views/Profile'
import Login from './views/Login'
import ResponsiveAppBar from './components/ResponsiveAppBar'

function App() {
  return (
  <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Initial />} />
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/boton" element={<Boton texto={'Vista de Boton'} />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
