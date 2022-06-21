import React,{useState} from 'react'
import axios from 'axios'
import  {Route,Routes,BrowserRouter} from 'react-router-dom'
import ShowProfile from './ShowProfile'
import SignUp from './SignUp'
import Login from './Login'

const App = () => {

  // creating the state for signup
  // const [signUp,setSignUp] = useState({
  //   name:"",
  //   email:"",
  //   password:""
  // })



  // const handleSubmit = ()=>{
  //   console.log("clicked");
  //     // axios.get("http://localhost:1000/testing").then((response)=>{
  //     //   console.log(response, "response");
  //     // })

  //       axios.post("http://localhost:1000/dataroute", signUp)
  // }


  // const handleChange = (e)=>{
  //   console.log("changed",e.target.value);
  //   console.log(e.target.name,"name");

  //   setSignUp(
  //       {
  //         ...signUp,
  //         [e.target.name]:e.target.value
  //       }
  //   )
  // }

  // console.log(signUp);


  return (
    <div>
      {/* <h1>Sign up</h1>
        <input type="text" name="name" placeholder='name'  onChange={handleChange}  />
        <input type="text" name="email" placeholder='email'  onChange={handleChange}  />
        <input type="text" name="password" placeholder='password'  onChange={handleChange}  />

        <button onClick={handleSubmit}>submit</button>
      <h1>Login</h1>

          <Login /> */}
        <BrowserRouter>
              <Routes>
              <Route path="/"  element={<SignUp />} />
              <Route path="/login"  element={<Login />} />

            <Route  path="showprofile"   element={<ShowProfile/>} />


              </Routes>
        
        </BrowserRouter>


    </div>
  )
}

export default App
