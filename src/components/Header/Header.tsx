import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="containerHeader">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/francais">Francais</Link>
        </li>
        <li>
          <Link to="/maths">Maths</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
