import { useState } from 'react';

const List = props => {
const { todo, id } = props;

const [isComplete, setIsComplete] = useState(false);
const {deleteTodo} = props

const handleClick = (e, idx) => {
    e.preventDefault();
    console.log(idx);
    deleteTodo(e, idx);
}

return (
    <>
    <div className={`todoItem ${isComplete ? ' completed': ''}`}>
    {todo}
    <hr />
    {/* <form onSubmit={handleSubmit}> */}
        <label>Completed?</label>
        <input type="checkbox"  value={isComplete}
        onChange={e =>setIsComplete(e.target.checked)}/>
        <br/>
        <button onClick={
            (e) => handleClick(e, id)}>Delete Todo</button>

    {/* </form> */}
    </div>
    </>
)
};

export default List;