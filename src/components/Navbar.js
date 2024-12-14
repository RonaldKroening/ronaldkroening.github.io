import Link from 'next/link';
import "../styles/navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Desktop Navbar */}
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <img width="60px" height="60px" src="/navbar-logo.png"></img>
          </Link>
        </div>

        <ul className="navbar-links">
        <li>
          <Link href="https://www.github.com/RonaldKroening" target="_blank" rel="noopener noreferrer">
            Github
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/RonaldKroening" target="_blank" rel="noopener noreferrer">
            Linkedin
          </Link>
        </li>
      </ul>


      </div>
    </nav>
  );
};

export default Navbar;

