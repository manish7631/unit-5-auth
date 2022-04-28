import { useContext } from "react"
import { AuthContext  } from "../contexts/AuthContext"

export const Navbar = () => {
    const {status, isAuth, toggleAuth} = useContext(AuthContext);



    const handleChange = () => {

        const user = {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
        console.log("Hello")
         fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
                (status ? toggleAuth(null) : toggleAuth(data))
            })

            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <nav style={{
            display: "flex",
            justifyContent: "end",
            padding: "15px",
            fontSize: "28px",
            border: "1px solid red",
            width: "70%" ,
            margin:"auto" 
           
            
        }}>
        
        <button style={{
         
            fontSize: "large",
            background: "grey",
            color: "white",
            border: "none",
            borderRadius:"10px",
            width:"90px" ,
            height:"30px" 
          
        }}
        onClick={() => {
            handleChange();
            isAuth()
        }}>{status ? "Logout": "Login"}</button>
        </nav>
    )
}