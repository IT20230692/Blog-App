import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
    <TopBar/>
      <Routes>  
      <Route  path="/" element={<Home/>}></Route>
      <Route  path="/login" element={user ? <Home/> :<Login/>}></Route>
      <Route  path="/register" element={user ? <Home/> :<Register/>}></Route>
      <Route  path="/write" element={user ? <Home/> :<Write/>}></Route>
      <Route  path="/settings" element={user ? <Home/> :<Settings/>}></Route>
      <Route  path="/post/:postId" element={<Single/>}></Route> 
      </Routes>
      </BrowserRouter>
  );
}

export default App;
