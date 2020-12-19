import { useQuery, gql } from '@apollo/client';

const BOOKS_QUERY = gql`
  query BooksQuery {
    books {
      title
      subtitle
      author
      category
      pages
    }
  }
`;


const BookList = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map((book) => (
    <div className="booksGrahQL" >
      <h1>Title: {book.title}</h1>
      <p>Subtitle: {book.subtitle}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Pages: {book.pages}</p>
    </div>
  ));

}


export default BookList;
