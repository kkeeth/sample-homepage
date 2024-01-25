import xSVG from "../assets/twitter-brands.svg";
import instagramSVG from "../assets/instagram-brands.svg";
import githubSVG from "../assets/mark-github.svg";
import spotifyPNG from "../assets/Spotify_Icon_RGB_Black.png";

const Contact = () => {
  return (
    <div>
      <h1 className="w-full text-center mb-8">Contact</h1>
      <div className="link-items">
        <a className="item" href="https://twitter.com/kuwahara_jsri">
          <img src={xSVG} alt="𝕏のロゴ" />
        </a>
        <a className="item" href="#">
          <img src={instagramSVG} alt="Instragramのロゴ" />
        </a>
        <a className="item" href="https://github.com/kkeeth">
          <img src={githubSVG} alt="GitHubのロゴ" />
        </a>
        <a
          className="item"
          href="https://open.spotify.com/show/4ZqUQtob7eJrz9DQV7lPVd"
        >
          <img src={spotifyPNG} alt="Spotifyのロゴ" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
