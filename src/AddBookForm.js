import './AddBookForm.css';

function AddBookForm({title,handleInput,handleClick}){
    return(
        <div id="form">
            <input id="inputtext" value={title} onChange={handleInput}/>
            <button id="addbutton" onClick={handleClick}>Add Book</button>
        </div>
       
    )
}

export default AddBookForm;