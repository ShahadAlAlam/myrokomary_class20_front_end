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
        <div className='header-blue'>
          <div className='container-fluid'>
            <div className="row">
              <nav className="navbar navbar-expand-lg">
                {isAuthenticated && <Link className='navbar-brand nav-link ms-2 fs-2 fw-bold text-white'
                                          to={`/welcome/${userNameValue}`}>MyRokomay</Link>}
                {!isAuthenticated &&
                    <Link className='navbar-brand nav-link ms-2 fs-2 fw-bold text-white' to={`/login`}>MyRokomay</Link>}
                {/* <Link className='navbar-brand ms-2 fs-2 fw-bold text-black' to= '/welcome/${username}'>MyRokomay</Link>  */}
                <div className="collapse navbar-collapse">
                  <ul className='navbar-nav'>
                    <li className='nav-item fs-5'>
                      {isAuthenticated && <Link className='nav-link text-white' to={`/welcome/${userNameValue}`}>Home</Link>}
                    </li>
                    <li className='nav-item fs-5'>
                      {isAuthenticated && <Link className='nav-link text-white' to='/listbooks'>Books list</Link>}
                    </li>
                  </ul>
                </div>
                <ul className="navbar-nav">
                  <li className='nav-item fs-5'>
                    {/*<div className="panel-heading">*/}
                    {/*  <h4 className="panel-title">*/}
                    {/*    <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>*/}
                    {/*  </h4>*/}
                    {/*</div>*/}
                    {/*<div id="collapse1" className="panel-collapse collapse">*/}
                    {/*  <ul className="list-group">*/}
                    {/*    <li className="list-group-item">*/}
                    {/*      {isAuthenticated &&*/}
                    {/*          <Link className='nav-link text-white' to='/user'>Profile</Link>}*/}
                    {/*    </li>*/}
                    {/*    <li className="list-group-item">*/}
                    {/*      {isAuthenticated &&*/}
                    {/*          <Link className='nav-link text-white' to='/logout'*/}
                    {/*                onClick={authContext.logout}>logout</Link>}*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*  <div className="panel-footer">Footer</div>*/}
                    {/*</div>*/}
                    {isAuthenticated &&
                        <Link className='nav-link text-white' to='/logout' onClick={authContext.logout}>logout</Link>}
                  </li>
                  <li className='nav-item fs-5'>
                    {!isAuthenticated && <Link className='nav-link text-white' to='/login'>Login</Link>}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </header>
  );
}

export default HeaderComponent;
