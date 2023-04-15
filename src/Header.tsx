import logo from "../src/insta-box.png";

export default function Header() {
  return (
    <header>
      <nav className="navlist">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
