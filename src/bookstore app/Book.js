// Single book component
const Book = (props) => {
  // console.log(props);
  const { id, image, title, titleStyle, author, getBook, number } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2 style={titleStyle}>{title}</h2>
      <h4>{author.toUpperCase()} </h4>
      <button onClick={() => getBook(id)}>Find book</button>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;
