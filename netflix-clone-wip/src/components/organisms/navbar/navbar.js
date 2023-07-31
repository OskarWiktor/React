import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Navbar() {

  //ToDo 3. Search - animation on click giving input with white bg or/and other web page (I have to think about it)
  //ToDo 4. Navbar disappears on scroll down, appears on scroll up, with transition and opacity

  return (
    <section className="navbar">
      <div className="navbar--wrapper">
        <h2 className="navbar__logo">
          <Link className="navbar__logo--link" to="/">
            NETFLIX
          </Link>
        </h2>
        <nav className="navbar__nav">
          <ul className="navbar__nav--ul">
          <li className="navbar__nav--li">
              <Link className="navbar__nav--link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar__nav--li">
              <Link className="navbar__nav--link" to="/category">
                Category
              </Link>
            </li>
          </ul>
          <ul className="navbar__nav--ul">
            <li className="navbar__nav--li">
              <Link className="navbar__nav--link" to="/search">
                <SearchIcon />
              </Link>
            </li>
            <li className="navbar__nav--li">
              <Link className="navbar__nav--link" to="/account">
                <AccountCircleIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
