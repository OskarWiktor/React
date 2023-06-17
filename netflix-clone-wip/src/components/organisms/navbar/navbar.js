import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {

  //ToDo 1. React Router - other pages
  //ToDo 2. MUI change to accent color on hover
  //ToDo 3. Search - animation on click giving input with white bg or/and other web page (I have to think about it)
  //ToDo 4. Navbar disappears on scroll down, appears on scroll up, with transition and opacity

  return (
    <section className="navbar">
      <div className="navbar--wrapper">
        <h2 className="navbar__logo">
          <a className="navbar__logo--link" href="/">
            NETFLIX
          </a>
        </h2>
        <nav className="navbar__nav">
          <ul className="navbar__nav--ul">
            <li className="navbar__nav--li">
              <a className="navbar__nav--link" href="/category">
                Category
              </a>
            </li>
          </ul>
          <ul className="navbar__nav--ul">
            <li className="navbar__nav--li">
              <a className="navbar__nav--link" href="/search">
                <SearchIcon />
              </a>
            </li>
            <li className="navbar__nav--li">
              <a className="navbar__nav--link" href="/account">
                <AccountCircleIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
