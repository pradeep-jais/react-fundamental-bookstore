import './booklist.css';
import { books } from './bookData';
import Book from './Book';

const Booklist = () => {
  const getBook = (id) => {
    const newBook = books.find((book) => book.id === id);
    console.log(newBook);
  };

  return (
    <main className="books-center">
      <h1 className="title">Best selling books at Amazon</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book key={book.id} {...book} getBook={getBook} number={index} />
          );
        })}
      </section>
    </main>
  );
};

// export default Booklist;
