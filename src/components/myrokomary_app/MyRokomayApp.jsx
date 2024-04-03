import { useState } from 'react';
import { BrowserRouter , Routes , Route, useNavigate, useParams} from 'react-router-dom';
import './MyRokomaryApp.css'
export default function MyRokomaryApp(){
    return(
        <div className="MyRokomaryApp">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginComponent/>}/> 
              <Route path='/login' element={<LoginComponent/>}/>  
              <Route path='/welcome/:username' element={<WelcomeComponent/>}/> 
              <Route path='/books' element={<ListBooksComponent/>}/> 
              <Route path='*' element={<ErrorComponent/>}/>
            </Routes>
          </BrowserRouter>
        {/* <LoginComponent/>
        <WelcomeComponent/> */}
            {/* Rokomary Application */}
        </div>
    );
}

function LoginComponent(){
  const [username,setUser] =  useState('admin');
  function handleUserName(event){
    setUser(event.target.value);
  }
  function handlePassword(event){
    setPassword(event.target.value);
  }
  
  function handleSubmit(){
    if(username=="admin" && password=="admin"){
      console.log("success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      // navigate('/welcome/'+username);
      navigate(`/welcome/${username}`);
    } else {
      console.log("failed");
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
    }
  }
  
  function SuccessMessageComponent(){
    if(showSuccessMessage){
    return (
      <div>Authentication Successful</div>
      );
    }
    else{
    // return(
    //     <div>Authentication failed, Please check your Credentials</div>
    //   );
    return null;
    }
  }
  function ErrorMessageComponent(){
    if(showErrorMessage){
    return (
          <div>Authentication failed, Please check your Credentials</div>
    );
    }
    else{
    return null;
    }
  }

  const [password,setPassword] =  useState('admin');
  
  const [showSuccessMessage,setShowSuccessMessage] =  useState(false);
    
  const [showErrorMessage,setShowErrorMessage] =  useState(false);
  
  const navigate = useNavigate();
  return(
    <div className='Login'>
      {showSuccessMessage && <div>Authentication Successful</div>}
      {showErrorMessage && <div>Authentication failed, Please check your Credentials</div>}
      {/* <SuccessMessageComponent/> */}
      {/* <ErrorMessageComponent/> */}
      <div className='LoginForm'>
        <div>
          <label>User Name</label>
          <input type="text" name="username" value={username} onChange={handleUserName}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handlePassword}/>
        </div>
        <div>
          <button type="button" name="loginButton" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent(){
  // const params = useParams();
  const {username} = useParams();
  const navigate = useNavigate();
  return(
    <div className='Welcome'>
      {/* <h1>Welcome {params.username}</h1> */}
      <h1>Welcome {username}</h1>
      <div>
        <div>Welcome Component</div>
        <button type="button" name="listBooks" onClick={()=>{navigate("/books")}}>list books</button>
      </div>
    </div>
  );
}

function ErrorComponent(){
  return(
    <div className='ErrorComponent'>
      <h1>We are working Hard</h1>
      <div>Appologies for 404, Please contact to Administrator</div>
    </div>
  );
}

function ListBooksComponent(){
  const books=[{
    "title":"First Book",
    "author":"First Author",
    "publisher":"First publisher",
    "edition":"First edition",
    "numberOfPages":1,
    "country":"Bangladesh",
    "language":"Bangla"
  },
  {
    "title":"এক পলেক গিট ও গিটহাব",
    "author":"জুনােয়দ আহেমদ",
    "publisher":"উইদ জুনােয়দ",
    "edition":"প্রথম এিডশন",
    "numberOfPages":154,
    "country":"Bangladesh",
    "language":"Bangla"
    },
    {
      "title":"Third Book",
      "author":"SecoThirdnd Author",
      "publisher":"SecThirdond publisher",
      "edition":"Second edition",
      "numberOfPages":1,
      "country":"Bangladesh",
      "language":"Bangla"
      }
]

  return(
    <div className='ListBooksComponent'>
      <h1>Books List</h1>
      <div>
        <table className='ListBooksData'>
          <thead>
            <th>title</th>
            <th>author</th>
            <th>publisher</th>
            <th>edition</th>
            <th>country</th>
            <th>language</th>
          </thead>
          <tr>
            <td>{books[0].title}</td>
            <td>{books[0].author}</td>
            <td>{books[0].publisher}</td>
            <td>{books[0].edition}</td>
            <td>{books[0].country}</td>
            <td>{books[0].language}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}