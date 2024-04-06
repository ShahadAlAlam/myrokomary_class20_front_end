import axios from "axios";
import { useState } from "react";

export default function(){

    const [message,setMessage]=useState([]);

    function callData(){
        axios.get("http://localhost:8090/all-books-list")
        .then((response)=>showResponse(response))
        .catch((error)=>showErrorResponse(error))
        .finally(()=>console.log('cleanup'));
    }
    function showResponse(response){
        setMessage(response.data)
        console.log(response)
    }
    function showErrorResponse(error){
        setMessage(error.data)
        console.log(error)
    }
    return(
        <div>
            <button type="button" name="button" onClick={callData}>call data</button>
            <div className="text-data">
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
                    {message.map(
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