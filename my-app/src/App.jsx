import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Initial from './views/initial'
import Boton from './components/Boton'
import Profile from './views/Profile'
import Login from './views/Login'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [isLogin, setIsLogin] = useState(false); // This state will be used to determine if the user is logged in or not
  const login = async (user) => { // This function will be used to set the isLogin state to true when the user logs in
    // Fetch user
    const data = await fetch ("http://localhost:5000/login", {
      method:"POST", 
      headers:{"Content-Type":"application/json"}, 
      body: JSON.stringify(user)
    });
    const datos = await data.json();
    setIsLogin(datos.isLogin);
    return datos.isLogin;
  }; 
  const logout = () => {
    setIsLogin(false);
  };
  return (
  <BrowserRouter>
    {isLogin && <ResponsiveAppBar logout={logout} />}
    <Routes>
      <Route path="/" element={<Login login={login}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={isLogin ? <Initial /> : <Navigate to={"/"} />} />
      <Route path="/user/profile" element={isLogin ? <Profile /> : <Navigate to={"/"} />} />
      <Route path="/boton" element={<Boton texto={'Vista de Boton'} />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
