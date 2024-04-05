import { useAuth } from "./security/AuthContext";

export default function ListBooksComponent() {
  const authContext = useAuth();
  const books = [{
    "id": 1,
    "title": "First Book",
    "author": "First Author",
    "publisher": "First publisher",
    "edition": "First edition",
    "numberOfPages": 1,
    "country": "Bangladesh",
    "language": "Bangla"
  },
  {
    "id": 2,
    "title": "এক পলেক গিট ও গিটহাব",
    "author": "জুনােয়দ আহেমদ",
    "publisher": "উইদ জুনােয়দ",
    "edition": "প্রথম এিডশন",
    "numberOfPages": 154,
    "country": "Bangladesh",
    "language": "Bangla"
  },
  {
    "id": 3,
    "title": "Third Book",
    "author": "SecoThirdnd Author",
    "publisher": "SecThirdond publisher",
    "edition": "Second edition",
    "numberOfPages": 1,
    "country": "Bangladesh",
    "language": "Bangla"
  }
  ];

  return (
    // <div className='ListBooksComponent'/>
    <div className='container'>
      <h1>Books List</h1>
      <div>
        {/* <table className='ListBooksData'>  changed to bootstrap*/}
        <table className='table'>
          <thead>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Edition</th>
            <th>Country</th>
            <th>Language</th>
          </thead>
          <tbody>
            {books.map(
              book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>{book.edition}</td>
                  <td>{book.country}</td>
                  <td>{book.language}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
