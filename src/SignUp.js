import React,{useState} from 'react'
import axios from 'axios'
import Login from './Login'
import  {Link} from 'react-router-dom'

const SignUp = () => {

  // creating the state for signup
  const [signUp,setSignUp] = useState({
    name:"",
    email:"",
    password:""
  })



  const handleSubmit = ()=>{
    console.log("clicked");
      // axios.get("http://localhost:1000/testing").then((response)=>{
      //   console.log(response, "response");
      // })

        axios.post("http://localhost:1000/dataroute", signUp)
  }


  const handleChange = (e)=>{
    console.log("changed",e.target.value);
    console.log(e.target.name,"name");

    setSignUp(
        {
          ...signUp,
          [e.target.name]:e.target.value
        }
    )
  }

  console.log(signUp);


  return (
    <div>
      <h1>Sign up</h1>
        <input type="text" name="name" placeholder='name'  onChange={handleChange}  />
        <input type="text" name="email" placeholder='email'  onChange={handleChange}  />
        <input type="text" name="password" placeholder='password'  onChange={handleChange}  />

     <Link to="/login">
     
      <button onClick={handleSubmit}>submit</button>
      
     </Link>  

        


    </div>
  )
}

export default SignUp
