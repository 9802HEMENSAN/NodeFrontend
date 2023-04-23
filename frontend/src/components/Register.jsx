import React, { useState } from 'react'
import axios from "axios";

const initUser={
    name : "",
    email : "",
    password : ""
}
const Register = () => {
  const [user, setUser] = useState(initUser);
 
  const handeChange=(e)=>{
    
    const {name,value }=e.target;

    setUser({...user, [name] : value })
  }

  const RegisterPost= (e)=>{
    e.preventDefault();

        try {
            axios.post("http://localhost:8080/register", user )
            .then(()=>  alert("Sign Up Successful"))
            .catch(()=> alert("Please Enter Correct details"));
            console.log(user)
        } catch (error) {
            console.log("Something went wrong !")
        }
  }
   const {name,email,password}=user;

  return (
    <div> 
        <h1>Register</h1>
       <form onSubmit={RegisterPost}>
          <input placeholder="Enter Name"   name="name" value={name}
           onChange={handeChange}  />
          <input placeholder="Enter Email"  
          type="email" name="email" value={email} onChange={handeChange}  />
          <input placeholder="Enter Password" 
          type="password" name="password" value={password} onChange={handeChange}  />
          <input type="Submit" value="Sign Up"/>
       </form>
    </div>
  )
}

export default Register