import {useState} from 'react';

import MyContext from '../context/MyContext';
import Navbar from './Navbar';
import Form from './Form';

const Wrapper = () => {
    console.log("wrapper");
    const [myName, setMyName] = useState("New User")
    return (
        <>

        <MyContext.Provider value={{ myName, setMyName }}>

        <Navbar />
        <Form/>


        </MyContext.Provider>
        </>
    );
}

export default Wrapper;