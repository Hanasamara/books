import './App.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

function App() {

  const myAPI = "https://65427340ad8044116ed3651e.mockapi.io/booklist/";

  const [books,setBooks] = useState([ ]);
  const [title,setTitle] = useState("");
  const [edit,setEdit] = useState({});

  useEffect( ()=>{ getData(myAPI);},[]);

  /////// Get from MockAPI ///////////
  function getData(url)
  {
    axios.get(url).then(response =>{
      const data = (response.data);
      setBooks(data);
    })
  };

  /////// Delete bok from list //////////
  function handleDelete(id)
  {
    //console.log(myAPI+`${id}`);
    axios.delete(myAPI+`${id}`).then(response => 
      {
        //console.log(response.data);
        getData(myAPI);
      });
      
  };

  ////// read book title from input ////////
  function handleInput(e)
  {
    e.preventDefault();
    setTitle(e.target.value);
    console.log(title);
    
  };

  ///// Add book to our MockAPI and display it on screen //////
  function addBook(e)
  {
    if(title === '')
    {
      console.log("no title to add");
    }
    else{
      e.preventDefault();
    const newBook = {
      "title" : title,
    };
    setTitle('');
    console.log(title);
    axios.post(myAPI,newBook).then(response => 
      {
        getData(myAPI);
      });
    }
   
  }

  ///// edit title function /////////

  function handelEdit(idbook,titlebook)
  {
    setEdit({'title':titlebook, 'id':idbook});
    // console.log(edit.title);
  };

  function editTitle(e)
  {
    e.preventDefault();
    // const newTitle = e.target.value;
    // const sameID = edit.id;
    setEdit({'title':e.target.value, 'id':edit.id})
    // console.log(edit);
  };

  function save(e)
  {
    axios.put(myAPI+`${edit.id}`,edit).then(response => 
      {
        console.log(response.data);
        setEdit({});
        getData(myAPI);
      })
  };

  function cancel(e)
  {
    setEdit({});
  }


  //////// HTML Part ///////////
  return (
    <>
    <h1 id="title">Favorite Books</h1>
    <AddBookForm title = {title} handleInput= {handleInput} handleClick={addBook}/>
    <BookList books={books} Delete={handleDelete} handleEdit={handelEdit} editstates={edit} 
    handleChangeTitle={editTitle} save={save} cancel={cancel}/>
    </>
  );
}

export default App;
