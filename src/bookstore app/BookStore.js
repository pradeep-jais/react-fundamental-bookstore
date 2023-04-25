import Booklist from './Booklist';

const BookStore = () => {
  return (
    <main className="books-center">
      <h1 className="title">Best selling books at Amazon</h1>
      <section className="booklist">
        <Booklist />
      </section>
    </main>
  );
};
export default BookStore;
