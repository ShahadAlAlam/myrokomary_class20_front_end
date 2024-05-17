// import axios from "axios";
import {useAuth} from "./security/AuthContext";
import {useEffect, useState} from "react";
import {apiPathAllBooksList, apiPathDeleteBooks, apiPathDeleteBooksById} from "./api/BooksApiService";
import {useNavigate, useParams} from "react-router-dom";
import Alert from "bootstrap/js/src/alert";

function ListBooksComponent() {
    const pagination={
        "pageNumber":0,
        "pageSize":100
    }
    const authContext = useAuth();

    const [books, setBooks] = useState([]);

    const [showMessage, setShowMessage] = useState(false);

    const [message, setMessage] = useState("");

    const [alertType, setAlertType] = useState("alert alert-primary");


    const navigate = useNavigate();

    const params = useParams();

    const len = !params.messagedata ? params.messagedata : "";

    const [messagedata, setMessageData] = useState(!params.messagedata > 0 ? params.messagedata : "");

    const [showMessagedata, setShowMessagedata] = useState(!params.messagedata ? true : false);

    setInterval(() => {
        setShowMessagedata(false)
        setShowMessage(false)
    }, 5000)

    useEffect(
        () => {
            console.log(params.messagedata);
            GetBooks()
        }, []
    )

    function GetBooks() {
        // console.log("get books called")
        // axios.get("http://localhost:8090/all-books-list")
        apiPathAllBooksList(0,100).then((response) => setBooksResponse(response))
            .catch((error) => setErrorResponse(error));
        // .finally(()=>console.log("cleanup"));
    }


    function setBooksResponse(response) {
        console.log(response)
        // console.log("successfull");
        // console.log(response.data);
        setBooks(response.data.body);
    }

    function setErrorResponse(error) {
        console.log("failed");
        // setBooks([]);
        // return;
    }

    function deteteBooks(id) {
        console.log(id)
        apiPathDeleteBooksById(id)
            .then((response) => {
                showResponseMessage(response);
                setAlertType("alert alert-success")
            })
            .catch((error) => console.log(error))
            .finally(console.log("refreshing data"));
        // console.log("refreshing data")
        GetBooks();
    }

    function showResponseMessage(response) {
        // console.log(response);
        setMessage(response.data.details);
        setShowMessage(true);
    }

    function updateBooks(id) {
        console.log(id);
        navigate(`/books/${id}`)
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
        <div className='body'>
            <div className='container-fluid'>
                <div>
                    <h1>Books List</h1>
                    {/* <table className='ListBooksData'>  changed to bootstrap*/}
                    {/* <table className='table table-dark'> */}
                    {/*  {showMessage && <div className="alert alert-primary">{message}</div>}*/}
                    {showMessage && <div className={alertType}>{message}</div>}
                    {showMessagedata && <div className="alert alert-primary">{messagedata}</div>}

                    <div className="btn btn-success m-5" onClick={() => updateBooks(-1)}>Add New Book</div>
                </div>
                <div>
                    <div className='row clearfix'>
                        <div className='col-md-12 column'>
                            <table className='table table-striped table-light'>
                                <thead className='thead-dark'>
                                <tr>
                                    <th scope="col" className="col-md-2">Title</th>
                                    <th scope="col" className="col-md-2">Author</th>
                                    <th scope="col" className="col-md-2">Publisher</th>
                                    <th scope="col" className="col-md-1">Edition</th>
                                    <th scope="col" className="col-md-1">Number of Pages</th>
                                    <th scope="col" className="col-md-1">Country</th>
                                    <th scope="col" className="col-md-1">Language</th>
                                    <th scope="col" className="col-md-1">Delete</th>
                                    <th scope="col" className="col-md-1">Update</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    books.map(
                                        book => (
                                            <tr key={book.booksId}>
                                                <td scope="col" className="col-md-2">{book.title}</td>
                                                <td scope="col" className="col-md-2">{book.author}</td>
                                                <td scope="col" className="col-md-2">{book.publisher}</td>
                                                <td scope="col" className="col-md-1">{book.edition}</td>
                                                <td scope="col" className="col-md-1">{book.numberOfPages}</td>
                                                <td scope="col" className="col-md-1">{book.country}</td>
                                                <td scope="col" className="col-md-1">{book.language}</td>
                                                <td scope="col" className="col-md-1">
                                                    <button className="btn btn-warning"
                                                            onClick={() => deteteBooks(book.booksId)}>Delete
                                                    </button>
                                                </td>
                                                <td scope="col" className="col-md-1">
                                                    <button className="btn btn-success"
                                                            onClick={() => updateBooks(book.booksId)}>Update
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListBooksComponent;