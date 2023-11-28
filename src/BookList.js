import { VscChromeClose } from "react-icons/vsc";

import './BookList.css';

function BookList({books,Delete,handleEdit,editstates,handleChangeTitle,save,cancel}){
    return(
        <>
        <ul className="list">
            {books.map(book =>(
                <li key={book.id}>
                    {book.id !== editstates.id ?
                    (
                    <>
                    <div id="bookCover">
                    <img id="cover" src={book.cover}/><br/>
                    {book.title}
                    </div>
                    <div id="content">
                    <button id="edit" onClick={()=>handleEdit(book.id,book.title)}>Edit title</button>
                    <button id="upload">Upload img</button>
                    <VscChromeClose 
                    style={{ color: 'red', fontSize: '22px', fontWeight: 'bolder'}} 
                    onClick={()=>Delete(book.id)}/>
                    </div>
                    </>
                    ):
                    (
                        <>
                        <div id="bookCover">
                        <img id="cover" src={book.cover}/> <br/>
                        <input id="editInput" value = {editstates.title} onChange={handleChangeTitle}/>
                        </div>
                        <div id="content">
                        <button id="save" onClick={save}>Save</button>
                        <button id="cancel" onClick={cancel}>Cancel</button>
                        </div>
                        </>
                    )
                    }
                </li>
            ))}
        </ul>
        </>

    );
}
export default BookList;