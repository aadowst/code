import { useState } from 'react';

const Form = props => {
    const { todoSubmitted } = props
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        todoSubmitted(todo);
        setTodo("");

    }

    return (
        <div className='formContainer'>
            <h3>Enter a Todo</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='I need to...' value={todo}
                    onChange={(e) => setTodo(e.target.value)}>
                </input>
                <button>Add to List</button>

            </form>
        </div>

    )
}

export default Form;