import './booklist.css';

const books = [
  {
    id: 1,
    image: './images/book-1.jpg',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    titleStyle: { color: '#ff0000', backgroundColor: 'palegreen' },
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/81WCSu2RoJS.jpg',
    title: 'Animals Tales From Panchtantra',
    author: ' Wonder House Books',
    titleStyle: { color: '#ffff00', backgroundColor: 'palegreen' },
  },
];

const Booklist = () => {
  return (
    <main className="books-center">
      <h1 className="title">Best selling books at Amazon</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </main>
  );
};

const Book = (props) => {
  // console.log(props);
  const { image, name, style, author } = props;
  return (
    <article className="book">
      <img src={image} alt={name} />
      <h2 style={style}>{name}</h2>
      <h4>{author.toUpperCase()} </h4>
    </article>
  );
};

export default Booklist;
