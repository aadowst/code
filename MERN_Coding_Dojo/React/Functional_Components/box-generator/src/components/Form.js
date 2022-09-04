import {useState } from 'react';

const Form = props => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
        setColor("");

    };

    return(
        <form onSubmit={ handleSubmit }>
        <h1>Color</h1>
        <input type="text"placeholder="Enter a color here"
            onChange={ (e) => setColor(e.target.value) }
            value={ color }
        ></input>
        <input type="submit" value="Add" />
    </form>
    );
};

export default Form;