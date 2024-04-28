import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from './security/AuthContext';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';


export default function LoginComponent() {
    const [username, setUser] = useState('admin');
    const [password, setPassword] = useState('admin');

    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUserName(event) {
        setUser(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        // if (username == "admin" && password == "admin") {
        //   authContext.setAuthenticated(true);
        //   authContext.setUserNameValue(username);
        if (await authContext.login(username, password)) {
            // console.log("success");
            // setShowSuccessMessage(true);
            // setShowErrorMessage(false);
            // navigate('/welcome/'+username);
            navigate(`/welcome/${username}`);
        } else {
            // authContext.setAuthenticated(false);
            // console.log("failed");
            setShowErrorMessage(true);
            // setShowSuccessMessage(false);
        }
    }

    // function SuccessMessageComponent(){
    //   if(showSuccessMessage){
    //   return (
    //     <div>Authentication Successful</div>
    //     );
    //   }
    //   else{
    //   // return(
    //   //     <div>Authentication failed, Please check your Credentials</div>
    //   //   );
    //   return null;
    //   }
    // }
    // function ErrorMessageComponent(){
    //   if(showErrorMessage){
    //   return (
    //         <div>Authentication failed, Please check your Credentials</div>
    //   );
    //   }
    //   else{
    //   return null;
    //   }
    // }

    // return (
    //   <div className='Login'>
    //     {showSuccessMessage && <div>Authentication Successful</div>}
    //     {showErrorMessage && <div>Authentication failed, Please check your Credentials</div>}
    //     {/* <SuccessMessageComponent/> */}
    //     {/* <ErrorMessageComponent/> */}
    //     <div className='container'>
    //       <h1>Time to Login</h1>
    //       <div>
    //         <label>User Name</label>
    //         <input type="text" name="username" value={username} onChange={handleUserName} />
    //       </div>
    //       <div>
    //         <label>Password</label>
    //         <input type="password" name="password" value={password} onChange={handlePassword} />
    //       </div>
    //       <div>
    //         <button type="button" name="loginButton" onClick={handleSubmit}>Login</button>
    //       </div>
    //     </div>
    //   </div>
    // );


    // return (
    //   <MDBContainer fluid>
    //   {showSuccessMessage && <div>Authentication Successful</div>}
    //   {showErrorMessage && <div>Authentication failed, Please check your Credentials</div>}
    //   <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    //       <MDBCol col='12'>
    //         <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '900px'}}>
    //           <MDBCardBody className='p-5 w-100 d-flex flex-column'>
    //             <h2 className="fw-bold mb-2 text-center">Sign in</h2>
    //             <p className="text-black-50 mb-3">Please enter your login and password!</p>

    //             <MDBInput wrapperClass='mb-3 w-100' label='User Name' id='username' type='username' size="lg" value={username} onChange={handleUserName} />
    //             <MDBInput wrapperClass='mb-3 w-100' label='Password' id='password' type='password' size="lg" value={password} onChange={handlePassword} />

    //             <MDBBtn size='lg' name="loginButton" onClick={handleSubmit}>
    //               Login
    //             </MDBBtn>

    //           </MDBCardBody>
    //         </MDBCard>
    //       </MDBCol>
    //   </MDBRow>
    //   </MDBContainer>
    // );


    return (
        <div className='body'>
            <div className='container'>
                <div className='card st'>
                    <div className='card-body'>
                        <div className='card-title'>Sign in</div>
                        <form>
                            {/* {showSuccessMessage && <div>Authentication Successful</div>} */}
                            {showErrorMessage && <div>Authentication failed, Please check your Credentials</div>}
                            <div className="mb-3">
                                <span><label>Username</label></span> <span>
                <input
                    type="username"
                    className="form-control"
                    placeholder="Enter Username"
                    value={username}
                    onChange={handleUserName}
                />
                </span>
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>
                            <div className="d-grid">
                                <button type="button" className="btn btn-primary btn" onClick={handleSubmit}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
