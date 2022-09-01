import React, {useState} from 'react';

const UserForm = props =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 3 ){
            setFirstNameError("First name must be at least 3 digits")
        }else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 3 ){
            setLastNameError("Last name must be at least 3 digits")
        }else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 ){
            setEmailError("Email must be at least 5 digits")
        }else{
            setEmailError("");
        }
    }

    const handlePasswords = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value.length < 8 ){
            setPasswordError("Password must be 8 characters long")
        }else if(password !== confirmPassword){
            setPasswordError("Password and Confirm password must match")
        } else{
            setEmailError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
    }

    return(
        <>
        <form onSubmit= { createUser }>
            <div>
                <label>First Name:  </label>
                <input type="text" onChange= { handleFirstName}/>
                {
                    firstNameError?
                    <p style={{color: 'red'}}>{firstNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Last Name:  </label>
                <input type="text" onChange= { handleLastName}/>
                {
                    lastNameError?
                    <p style={{color: 'red'}}>{lastNameError}</p>:
                    ''
                }
            </div>

            <div>
                <label>Email Address:  </label>
                <input type="email" onChange={handleEmail}/>
                {
                    emailError?
                    <p style={{color: 'red'}}>{emailError}</p>:
                    ''
                }
            </div>

            <div>
                <label>Password:  </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>


            </div>
            <div>
                <label>Confirm Password:  </label>
                <input type="password" onChange={ handlePasswords}/>
                {
                    passwordError?
                    <p style={{color: 'red'}}>{passwordError}</p>:
                    ''
                }
            </div>
            <input type="submit" value="Create User"/>
        </form>

        <p>Your Form Data</p>
        <p>First Name:  {firstName}</p>
        <p>Last Name:  {lastName}</p>
        <p>Email:  {email}</p>
        <p>Password:  {password}</p>
        <p>Confirm Password:  {confirmPassword}</p>

        </>
    );
};
export default UserForm;