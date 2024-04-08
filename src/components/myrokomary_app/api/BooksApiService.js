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

export const apiPathGetBookById = ({id})=> apiClient.get(`/get-book-by-id/${id}`);

export const apiPathAddBooks = ({books})=> apiClient.post(`/add-book`);

export const apiPathUpdateBooks = ({books})=> apiClient.put(`/update-book`);

export const apiPathDeleteBooks = ({books})=> apiClient.delete(`/delete-book`);

export const apiPathDeleteBooksById = (id)=> apiClient.delete(`/delete-book-by-id/${id}`);



