import React from 'react'

const BookList = ({books,title,handleDelete}) => {
    

    // const books=props.books
  return (
    <div className='book-list'>
        <h2>{title}</h2>
           {books.map((book)=>(
            <div className='book-id'key={book.id} >
                <h2> {book.bookName} </h2>
                <p> written by {book.author} </p>

                <button onClick={()=> handleDelete(book.id)}>delete</button>
                 </div>

        ))}
    </div>
  )
}

export default BookList
