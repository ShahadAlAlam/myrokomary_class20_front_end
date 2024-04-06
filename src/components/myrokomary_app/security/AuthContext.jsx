import { createContext, useContext, useState } from "react";


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
    
    // const valueTobeShared = {number, isAuthinticated, userNameValue, setAuthenticated, setUserNameValue};


    // increment number value after interval setInterval is a react function, 1000 = 1 second
    // setInterval( ()=>setNumber(number+1) , 5000 )

    
  function login(username,password) {
    if (username == "admin" && password == "admin") {
        setAuthenticated(true);
        setUserNameValue(username);
        return true;
    } else {
      setAuthenticated(false);
      setUserNameValue();
      return false;
    }
  }

  
  function logout(){
    setAuthenticated(false);
    setUserNameValue();
    return true;
  }

    return (
        // <AuthContext.Provider value={{number, isAuthinticated,  setAuthenticated , userNameValue, setUserNameValue}}>
        <AuthContext.Provider value={{isAuthenticated, userNameValue, login, logout}}>
        {/* <AuthContext.Provider value={valueTobeShared}> */}
            {children}
        </AuthContext.Provider>

    );
}