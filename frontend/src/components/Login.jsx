import React, { useState } from 'react'
import axios from "axios";

const initUser={
    email : "",
    password : ""
}
const Login = () => {
  const [user, setUser] = useState(initUser);
  const [token,setToken]=useState("");
  const handeChange=(e)=>{
    
    const {name,value }=e.target;

    setUser({...user, [name] : value })
  }

  const RegisterPost= (e)=>{
    e.preventDefault();

        try {
            axios.post("http://localhost:8080/login", user )
            .then((res)=>{  
                setToken(res.data.authToken)
                console.log(res.data.authToken)
                alert("Login Successful")})
            .catch(()=> alert("Register first !"));
            console.log(user)
        } catch (error) {
            console.log("Something went wrong !")
        }
  }
   const { email,password}=user;

  return (
    <div> 
        <h3>{token}</h3>
       <form onSubmit={RegisterPost}>
          <input placeholder="Enter Email"  
          type="email" name="email" value={email} onChange={handeChange}  />
          <input placeholder="Enter Password" 
          type="password" name="password" value={password} onChange={handeChange}  />
          <input type="Submit" value="Sign In"/>
       </form>
    </div>
  )
}

export default Login