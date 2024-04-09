// import { useNavigate, useParams, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { AuthContext } from './security/AuthContext';
import { useAuth } from './security/AuthContext';
// import { useContext } from 'react';

export function HeaderComponent() {
  // to use AuthContext we use useContext
  // const authContext = useContext(AuthContext);
  // use useAuth decared in AuthContext to access AuthContext
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  console.log(`authContext value in headercomponent ${authContext.userNameValue}`);
  const userNameValue = authContext.userNameValue;
  // console.log(authContext.number);

  // const { username } = useParams();
  // const navigate = useNavigate();
  // function gotoLink() {
  //   // authContext.valueTobeShared.username
  //   navigate(`/welcome/${authContext.valueTobeShared.userName}`);
  // }

  // function logout(){
  //   authContext.setAuthenticated(false);
  //   authContext.setUserNameValue();

  // }
  return (
    <header className='border-bottom border-light border-5 mb-5 p-2'>
      <div className='container'>
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            {isAuthenticated && <Link className='navbar-brand nav-link ms-2 fs-2 fw-bold text-black' to={`/welcome/${userNameValue}`}>MyRokomay</Link>}
            {!isAuthenticated && <Link className='navbar-brand nav-link ms-2 fs-2 fw-bold text-black' to={`/login`}>MyRokomay</Link>}
            {/* <Link className='navbar-brand ms-2 fs-2 fw-bold text-black' to= '/welcome/${username}'>MyRokomay</Link>  */}
            <div className="collapse navbar-collapse">
              <ul className='navbar-nav'>
                <li className='nav-item fs-5'>
                  {isAuthenticated && <Link className='nav-link' to={`/welcome/${userNameValue}`}>Home</Link>}
                </li>
                <li className='nav-item fs-5'>
                  {isAuthenticated && <Link className='nav-link' to='/listbooks'>Books list</Link>}
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className='nav-item fs-5'>
                {isAuthenticated && <Link className='nav-link' to='/logout' onClick={authContext.logout}>logout</Link>}
              </li>
              <li className='nav-item fs-5'>
                {!isAuthenticated && <Link className='nav-link' to='/login'>Login</Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  );
}

export default HeaderComponent;
