
import { adminNav } from "./components/Admin/Header/adminNav";
import "./App.css"
import Navbar from "./components/Atoms/Header/Navbar";
import { userNav } from "./components/User/Header/userNav";
import Home from "./components/Admin/Pages/Home";
import UserHome from "./components/User/Pages/Home";
import List from "./components/Admin/Pages/List";
import Not from "./components/Atoms/Not";
import Vote from "./components/User/Pages/Vote";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./components/UserLogin";


function App() {
  const role = "user";

  if (role === "admin") {
    return (
      <>
        <Navbar data={adminNav} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/" element={<Not />} />
          <Route path="/login" element={<UserLogin/>}/>
        </Routes>
      </>
    );
  }
  return (
    <>

    </>
  );
}

export default App;
