import axios from "axios";


// export function GetAllBooks(){
//     return axios.get("http://localhost:8090/all-books-list")
// }
// const mainApiPath ="http://localhost:8090";

// export const apiPathAllBooksList = ()=> axios.get(`${mainApiPath}/all-books-list`);

// export const apiPathPathVariable = ({id})=> axios.get(`${mainApiPath}/get-book-by-id/${id}`);

const apiClient = axios.create({
    baseURL : "http://localhost:8090"
});

export const apiPathAllBooksList = ()=> apiClient.get(`/all-books-list`);

export const apiPathPathVariable = ({id})=> apiClient.get(`/get-book-by-id/${id}`);