// import axios from "axios";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import {  apiPathAllBooksList } from "./api/BooksApiService";

export default function ListBooksComponent() {

  const authContext = useAuth();
  
  const [books,setBooks] = useState([]);

  useEffect(
    ()=>{GetBooks()},[]
  )

  function  GetBooks(){
    // axios.get("http://localhost:8090/all-books-list")
    apiPathAllBooksList().then((response)=> setBooksResponse(response))
    .catch((error)=>setErrorResponse(error));
    // .finally(()=>console.log("cleanup"));
  }


  function setBooksResponse(response){
    // console.log("successfull");
    console.log(response.data);
    setBooks(response.data);
  }

  function setErrorResponse(error){
    console.log("failed");
    // setBooks([]);
    // return;
  }

  // const books = [{
  //   "id": 1,
  //   "title": "First Book",
  //   "author": "First Author",
  //   "publisher": "First publisher",
  //   "edition": "First edition",
  //   "numberOfPages": 1,
  //   "country": "Bangladesh",
  //   "language": "Bangla"
  // },
  // {
  //   "id": 2,
  //   "title": "এক পলেক গিট ও গিটহাব",
  //   "author": "জুনােয়দ আহেমদ",
  //   "publisher": "উইদ জুনােয়দ",
  //   "edition": "প্রথম এিডশন",
  //   "numberOfPages": 154,
  //   "country": "Bangladesh",
  //   "language": "Bangla"
  // },
  // {
  //   "id": 3,
  //   "title": "Third Book",
  //   "author": "SecoThirdnd Author",
  //   "publisher": "SecThirdond publisher",
  //   "edition": "Second edition",
  //   "numberOfPages": 1,
  //   "country": "Bangladesh",
  //   "language": "Bangla"
  // }
  // ];

  return (
    // <div className='ListBooksComponent'/>
    <div className='container'>
      <h1>Books List</h1>
      <div>
        {/* <table className='ListBooksData'>  changed to bootstrap*/}
        {/* <table className='table table-dark'> */}
        <table className="table table-striped table-light">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Publisher</th>
              <th scope="col">Edition</th>
              <th scope="col">Country</th>
              <th scope="col">Language</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map(
                book => (
                  <tr key={book.id}>
                    <td scope="col">{book.title}</td>
                    <td scope="col">{book.author}</td>
                    <td scope="col">{book.publisher}</td>
                    <td scope="col">{book.edition}</td>
                    <td scope="col">{book.country}</td>
                    <td scope="col">{book.language}</td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
