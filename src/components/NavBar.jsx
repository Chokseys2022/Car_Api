import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav'>
      <Link to='/'>
        <div>Make</div>
      </Link>
      <Link to='/CarMake'>
        <div>Type</div>
      </Link>
      <Link to='/CarType'>
        <div>Year</div>
      </Link>
      <Link to='/CarYear'>
        <div>Model</div>
      </Link>
    </div>
  );
}

export default NavBar;
