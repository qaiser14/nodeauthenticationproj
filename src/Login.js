import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Login = () => {

    // Creating state for Login
    const [login, setstatelogin] = useState({

        name:"",
        password: ""
    })

    const [userProfile,setUserProfile] = useState([])
    const functionSubmit = () =>{

        axios.post("http://localhost:1000/passwordRoute", login).then((res)=>{
            // console.log(res.data);
            // setUserProfile(res.data)
            localStorage.setItem("loginData",JSON.stringify(res.data))
        })
    }


    const functionChange = (e) => {
            setstatelogin({
                ...login,
                [e.target.name]:e.target.value
            })
    }
    console.log(userProfile,"userProfile");

    // const showProfile = userProfile.map((item, index)=>{

    //     return(
    //         <div>
    //             <h1>{item.name}</h1>
    //             <h1>{item.email}</h1>
    //             <h1>{item.password}</h1>
    //         </div>
    //     )
    // })


    return(
        <div>
            <h1>Login</h1>
            <input type="text" name="name" onChange={functionChange} placeholder="name"/>
            <input type="text" name="password" onChange={functionChange} placeholder="password"/>
                <Link to='/showprofile'>
                <button onClick={functionSubmit}>Submit</button>
                </Link>

                {/* {showProfile} */}
        </div>
    )
}

export default Login