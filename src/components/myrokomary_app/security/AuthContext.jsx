import { createContext, useContext, useState } from "react";
import { apiPathExecuteBasicAuthenticationService,
    apiPathExecuteJwtAuthenticationService
} from "../api/AuthenticationService";
import {apiClient} from "../api/ApiClient";


// 1. create context and export it for give access to other components 
    // export const AuthContext = createContext();
     const AuthContext = createContext();
//  create and export a arrow function to give other components to use this context meaning AuthContext
export const useAuth = () => useContext(AuthContext);

// 2. put some state in the context
// 3. share it with other components 

/*
we are creating a context and using AuthProvider to share the context with other
components "children" so in MyRokomaryApp everything is wraped around by AuthProvider
*/

// 3. share it with other components
export default function AuthProvider({children}){
    // 2. put some state in the context
    // const [number,setNumber] = useState(0);
    const [isAuthenticated,setAuthenticated] = useState(false);
    
    const [userNameValue,setUserNameValue] = useState();

    const [token,setToken] = useState("");
    
    // const valueTobeShared = {number, isAuthinticated, userNameValue, setAuthenticated, setUserNameValue};


    // increment number value after interval setInterval is a react function, 1000 = 1 second
    // setInterval( ()=>setNumber(number+1) , 5000 )

    
  // function login(username,password) {
  //   if (username == "admin" && password == "admin") {
  //       setAuthenticated(true);
  //       setUserNameValue(username);
  //       return true;
  //   } else {
  //     setAuthenticated(false);
  //     setUserNameValue();
  //     return false;
  //   }
  // }

    async function login(username,password) {
        //basic Authentication
        // const baToken ='Basic '+ window.btoa(username+":"+password);

        // setAuthenticated(false);
        // setUserNameValue(username);

        try{
            //basic Authentication
            // const response = await apiPathExecuteBasicAuthenticationService(baToken);

            //jwt Authentication
            const response = await apiPathExecuteJwtAuthenticationService(username,password);
            console.log(response);
            const jwtToken ="Bearer "+response.data.token;
            // const jwtToken =response.data.token;
            if (response.status==200) {
                setAuthenticated(true);
                setUserNameValue(username);
                //basic Authentication
                // setToken(baToken);
                //JWT Authentication
                setToken(jwtToken);
                console.log("token="+token);
                console.log("jwtToken="+jwtToken);
                apiClient.interceptors.request.use(
                    (config)=>{
                        //basic Authentication
                        // config.headers.Authorization=baToken;
                        // JWT Authentication
                        // config.headers.Authorization=token;
                        console.log("before jwtToken="+jwtToken);
                        config.headers.Authorization=jwtToken;
                        console.log("config.headers.Authorization="+config.headers.Authorization);
                        return config;
                    }
                );
                return true;
            } else {
                logout();
                return false;
            }

        } catch (error){
            logout();
            return false;
        }
    }

  
  function logout(){
    setAuthenticated(false);
    setUserNameValue();
    setToken(null);
      apiClient.interceptors.request.use(
          (config)=>{
              //basic Authentication
              // config.headers.Authorization=baToken;
              // JWT Authentication
              config.headers.Authorization=token;
              return config;
          }
      );
    return true;
  }

    return (
        // <AuthContext.Provider value={{number, isAuthinticated,  setAuthenticated , userNameValue, setUserNameValue}}>
        <AuthContext.Provider value={{isAuthenticated, userNameValue, login, logout, token}}>
        {/* <AuthContext.Provider value={valueTobeShared}> */}
            {children}
        </AuthContext.Provider>

    );
}