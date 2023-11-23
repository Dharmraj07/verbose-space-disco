import React, { useState } from 'react'
import BookList from './BookList';

const Homepage = () => {
     // Array object 1
const book1 = {
    id: 1,
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee"
  };
  
  // Array object 2
  const book2 = {
    id: 2,
    bookName: "1984",
    author: "George Orwell"
  };
  
  // Array object 3
  const book3 = {
    id: 3,
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  };
  
  // Array object 4
  const book4 = {
    id: 4,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger"
  };
  
  // Array object 5
  const book5 = {
    id: 5,
    bookName: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling"
  };
  
  // You can use these objects in an array or individually as needed
  const booksArray = [book1, book2, book3, book4, book5];
  

    const [name,setName]=useState('mario');
    const [age,setAge]=useState(25);
    const [books,setBooks]=useState(booksArray);


    const handleClick=()=>{
        console.log("button clicked...");
        setName("arjun");
        setAge(30);
        console.log(books);
    }

    const handleDelete=(id)=>{
          const newBooks=books.filter((book)=> book.id!==id);
          setBooks(newBooks);
    }

  return (
    <div>
        <h1>Bookstore</h1>
        {/* <h4> {name}  is {age} year old</h4>
        <button onClick={handleClick}>click me</button> */}
       <BookList books={books} title={"mybooklist"} handleDelete={handleDelete}   / >
       <hr/>
       <BookList books={books.filter((book)=> book.id!==4)} title={"yourbooklist"}/>
    </div>
  )
}

export default Homepage