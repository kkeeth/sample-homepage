const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="link-items">
        <a className="item" href="https://twitter.com/kuwahara_jsri">
          <img src="/docs/6/logo-black.png" alt="𝕏のロゴ" />
        </a>
        <a className="item" href="#">
          <img
            src="/docs/6/Instagram_Glyph_Gradient.svg"
            alt="Instragramのロゴ"
          />
        </a>
        <a className="item" href="https://github.com/kkeeth">
          <img src="/docs/6/mark-github.svg" alt="GitHubのロゴ" />
        </a>
        <a
          className="item"
          href="https://open.spotify.com/show/4ZqUQtob7eJrz9DQV7lPVd"
        >
          <img src="/docs/6/Spotify_Icon_CMYK_Green.png" alt="Spotifyのロゴ" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
