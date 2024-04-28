import {apiClient} from "./ApiClient";

export const apiPathExecuteBasicAuthenticationService = (token)=> apiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
});
export const apiPathExecuteJwtAuthenticationService
    = (username,password)=>
    apiClient.post(`/authenticate`,{username,password});