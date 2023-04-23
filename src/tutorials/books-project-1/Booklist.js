import './booklist.css';

const firstBook = {
  image: './images/book-1.jpg',
  title: 'The Psychology of Money',
  author: 'Morgan Housel',
  titleStyle: { color: '#ff0000', backgroundColor: 'palegreen' },
};
const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81WCSu2RoJS._AC_UL900_SR900,600_.jpg',
  title: 'Animals Tales From Panchtantra',
  author: ' Wonder House Books',
  titleStyle: { color: '#ffff00', backgroundColor: 'palegreen' },
};

const Booklist = () => {
  return (
    <main className="books-center">
      <h1 className="title">Best selling books at Amazon</h1>
      <section className="booklist">
        <Book
          image={firstBook.image}
          name={firstBook.title}
          author={firstBook.author}
          subject="social"
          number={20}
        />
        <Book
          image={secondBook.img}
          name={secondBook.title}
          author={secondBook.author}
          style={secondBook.titleStyle}
        />
        <Book
          image={secondBook.img}
          name={secondBook.title}
          author={secondBook.author}
          style={secondBook.titleStyle}
        />
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
