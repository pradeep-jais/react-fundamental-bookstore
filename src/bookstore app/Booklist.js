import './booklist.css';
import { books } from './bookData';
import Book from './Book';

const Booklist = () => {
  const getBook = (id) => {
    const newBook = books.find((book) => book.id === id);
    console.log(newBook);
  };

  return (
    <>
      {books.map((book, index) => {
        return (
          <Book key={book.id} {...book} getBook={getBook} number={index} />
        );
      })}
    </>
  );
};

export default Booklist;
