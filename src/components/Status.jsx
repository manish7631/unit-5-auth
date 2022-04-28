import { AuthContext  } from "../contexts/AuthContext"
import { useContext } from "react";

export const UserStatus = () => {
    const {status, token} = useContext(AuthContext);

    return (
        <div style={
            {
                width: "400px",
                height:"400px" ,
                margin: "auto",
                border:"1px solid blue" ,
            }
        }>
               <p>User Token: {token}</p>
        </div>
      
    )
}