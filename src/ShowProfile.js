import React,{useState} from 'react'

const ShowProfile = () => {

    const data =   localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")):[]
    // const[userInfo,setUserInfo] = useState([data])

    // console.log(data);

    const showResult = data.map((item,i)=>{
        return(
            <div>
                <h1>{item.name}</h1>
                <h1>{item.email}</h1>
                <h1>{item.password}</h1>

            </div>
        )
    })
    console.log(showResult);
    return (
        <div>
            {data ?  <div>
                    <h1>
                       User Profile
                    </h1>
                    {showResult}
                
                </div>
            :<h1>Data not found</h1>}
        </div>
    )
}

export default ShowProfile
