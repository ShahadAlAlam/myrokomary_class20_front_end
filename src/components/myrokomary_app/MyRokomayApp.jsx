import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router';
import './MyRokomaryApp.css'
import LogoutComponent from './LogoutComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ListBooksComponent from './ListBooksComponent';
import ErrorComponent from './ErrorComponent';
import AuthProvider from './security/AuthContext'
export default function MyRokomaryApp() {
  return (
    <div className="MyRokomaryApp">
      <AuthProvider>
        {/* <HeaderComponent/> */}
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/welcome/:username' element={<WelcomeComponent />} />
            <Route path='/books' element={<ListBooksComponent />} />
            <Route path='/logout' element={<LogoutComponent />} />
            <Route path='*' element={<ErrorComponent />} />
          </Routes>
          {/* <FooterComponent /> */}
        </BrowserRouter>
      </AuthProvider>
      {/* <LoginComponent/>
        <WelcomeComponent/> */}
      {/* Rokomary Application */}
    </div>
  );
}


