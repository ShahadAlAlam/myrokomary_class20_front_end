import {useAuth} from "./security/AuthContext";

export default function LogoutComponent() {
    // const authContext = useAuth();
    // authContext.setAuthenticated(false);
    return (
        <div className='body'>
            <div className='logoutComponent'>
                <h1>You are logged out Successfully</h1>
                <div>Thank you for using our Application</div>
            </div>
        </div>
    );
}
