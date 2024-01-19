import axios from 'axios';
import React, { useRef } from 'react'
import Cookies from "js-cookies";
import logo from "./image/logo.png";


function AdminLogin() {
   const cardNo = useRef();
   const password = useRef();

   const handleLogin = (e) => {
     e.preventDefault();
     const data = {
       cardNo: cardNo.current.value,
       password: password.current.value,
     };
     console.log(data);
     axios.post("http://13.235.248.55:8000/v1/login/user", data).then((res) => {
       if (res.status === 200) {
         const role = res.data.data.role;
           Cookies.set("role", role);
       }
     });
   };

   return (
     <>
       <section className="login position-relative">
         <div className="shape"></div>
         <div className="container">
           <div className="background ">
             <div className="row">
               <div className="col-6 d-flex align-items-center justify-content-center">
                 <img src={logo} alt="logo" />
               </div>
               <div className="col-6">
                 <div className="user-login">
                   <form onSubmit={handleLogin} className="login-form">
                     <div className="form">
                       <h3 className="text-center mb-3">Admin Login</h3>

                       <div className="form-group">
                         <label>Voter Id : ~</label>
                         <input
                           type="text"
                           ref={cardNo}
                           className="form-control"
                           placeholder="Enter Your Voter Id"
                         />
                       </div>
                       <div className="form-group">
                         <label>Password : ~</label>
                         <input
                           type="password"
                           ref={password}
                           className="form-control"
                           placeholder="Password"
                         />
                       </div>
                       <button className="vote w-100 m-0" type="submit">
                         LogIn
                       </button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
}

export default AdminLogin