import Navigation from "./Navigation.jsx";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="logo">
          <a href="/">
            <img
              src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/1763370/1763370-1611655391437-470d23c0b23e5.jpg"
              alt="ロゴ画像"
            />
            <span className="site-name">Keeth</span>
          </a>
        </h1>
        <ul className="header-sns-items">
          <li>
            <a href="#">
              <img src="../assets/twitter-brands.svg" alt="twitter アイコン" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="../assets/instagram-brands.svg"
                alt="instagram アイコン"
              />
            </a>
          </li>
        </ul>
      </header>

      <div className="header-items">
        <Navigation />
      </div>
    </>
  );
};

export default Header;
