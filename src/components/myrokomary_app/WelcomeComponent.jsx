import { useNavigate, useParams , Link} from 'react-router-dom';

export default function WelcomeComponent() {
  // const params = useParams();
  const { username } = useParams();
  const navigate = useNavigate();
  const textVal = "Your Books";
  return (
    <div className='Welcome'>
      {/* <h1>Welcome {params.username}</h1> */}
      <h1>Welcome {username}</h1>
      <div className='container'>
        <div>Welcome Component</div>
        <pre>{textVal}</pre><Link className='nav-link' to='/books'>Go here</Link>
        {/* <button type="button" name="listBooks" onClick={()=>{navigate("/books")}}>list books</button> */}
      </div>
    </div>
  );
}
