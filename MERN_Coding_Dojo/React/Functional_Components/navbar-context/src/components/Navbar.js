import { useContext } from "react";
import MyContext from "../context/MyContext";

const Navbar = () => {
    console.log("navbar");
    const {myName} = useContext(MyContext)
    return (
        <h3> hi {myName} </h3>
    );

};

export default Navbar;