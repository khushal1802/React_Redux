
import "./App.css"
import Home from "./components/User/Pages/Home";
import Vote from "./components/User/Pages/Vote";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./components/UserLogin";
// import Cookies from 'js-cookies';
import AdminLogin from "./components/Admin/AdminLogin";

function App() {
  // const role = Cookies.get("role")
  const role = ""
// const role =""
   if (!role || role === "") {
     console.log("hello");
     return (
       <Routes>
         <Route path="/" element={<UserLogin />} />
         <Route path="*" element={<UserLogin />} />
         <Route path="/admin" element={<AdminLogin />} />
       </Routes>
     );
   } else if (role === "Admin") {
     return (
       <div className="admin-app">
         <Routes>
           {/* <Route path="/" element={<AdminElectionSelect />} /> */}
           <Route
             path="/admin/electionpartys"
            //  element={<AdminElectionPartys />}
           />
           <Route
             path="/admin/partysconnect"
            //  element={<AdminElectionConnect />}
           />
           {/* <Route path="/admin/evote" element={<AdminElectionVote />} /> */}
         </Routes>
       </div>
     );
   } else if (role === "User") {
     return (
       <div className="user-app">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/vote" element={<Vote />} />
           {/* <Route path="/profile" element={<UserProfile />} /> */}
         </Routes>
       </div>
     );
   }
}

export default App;
