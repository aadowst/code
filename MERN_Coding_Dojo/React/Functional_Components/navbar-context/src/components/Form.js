import { useContext } from "react";
import MyContext from "../context/MyContext";
const Form = (props) => {
    const {setMyName} = useContext(MyContext);



    return(
            <>
            <label>Enter your Name</label>
            <input type="text" placeholder='my name is' onChange={(e)=>setMyName(e.target.value)}></input>
            </>


    )
}

export default Form;