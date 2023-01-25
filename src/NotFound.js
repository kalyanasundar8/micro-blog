import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='notfound'>
      <h2>404 page</h2>
      <p>Page not found</p>
      <Link to='/'>Back to hom page</Link>
    </div>
  );
};

export default NotFound;
