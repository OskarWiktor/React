import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderNav() {
  return (
    <section className="navbar">
      <div className="navbar--wraper">
        <h1 className="navbar__logo">
          <a className="navbar__logo--link" href="/">
            NETFLIX
          </a>
        </h1>
        <nav className="navbar__nav">
          <ul className="navbar__nav--ul">
            <li className="navbar__nav--li">
              <a className="navbar__nav--link" href="/favourite">
                Favourite
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

export default HeaderNav;
