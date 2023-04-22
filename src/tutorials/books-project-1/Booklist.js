import './booklist.css';

const img = './images/book-1.jpg';
const title = 'The Psychology of Money';
const author = 'Morgan Housel';
const titleStyle = { color: '#ff0000', backgroundColor: 'palegreen' };

const Booklist = () => {
  return (
    <main className="books-center">
      <h1 className="title">Best selling books at Amazon</h1>
      <section className="booklist">
        <Book
          image={img}
          name={title}
          author={author}
          subject="social"
          number={20}
        />
        <Book image={img} name={title} author={author} style={titleStyle} />
        <Book image={img} name={title} author={author} />
        <Book image={img} name={title} author={author} />
      </section>
    </main>
  );
};

const Book = (props) => {
  // console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt={props.name} />
      <h2 style={props.style}>{props.name}</h2>
      <h4>{props.author.toUpperCase()} </h4>
    </article>
  );
};

export default Booklist;
