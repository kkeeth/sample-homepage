import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-visual">
          <img src="/src/assets/bg-image.jpeg" alt="メインビジュアル" />
          <div className="main-text">
            <h2>Kuwahara Keeth Kiyohito</h2>
            <p>it is my portfolit site</p>
          </div>
        </div>
        <section id="works">
          <h2 className="section-title">Works</h2>
          <ul className="works-items">
            <li className="item">
              <a href="#">
                <picture>
                  <source
                    srcSet="https://picsum.photos/id/10/268"
                    media="(min-width: 768px)"
                    type="image/jpg"
                  />

                  <img
                    src="https://picsum.photos/id/10/400"
                    alt="work thumbnail"
                  />
                </picture>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <picture>
                  <source
                    srcSet="https://picsum.photos/id/20/268"
                    media="(min-width: 768px)"
                    type="image/jpg"
                  />
                  <img
                    src="https://picsum.photos/id/20/400"
                    alt="work thumbnail"
                  />
                </picture>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <picture>
                  <source
                    srcSet="https://picsum.photos/id/30/268"
                    media="(min-width: 768px)"
                    type="image/jpg"
                  />
                  <img
                    src="https://picsum.photos/id/30/400"
                    alt="work thumbnail"
                  />
                </picture>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <picture>
                  <source
                    srcSet="https://picsum.photos/id/40/268"
                    media="(min-width: 768px)"
                    type="image/jpg"
                  />
                  <img
                    src="https://picsum.photos/id/40/400"
                    alt="work thumbnail"
                  />
                </picture>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <picture>
                  <source
                    srcSet="https://picsum.photos/id/50/268"
                    media="(min-width: 768px)"
                    type="image/jpg"
                  />
                  <img
                    src="https://picsum.photos/id/50/400"
                    alt="work thumbnail"
                  />
                </picture>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <picture>
                  <source
                    srcSet="https://picsum.photos/id/60/268"
                    media="(min-width: 768px)"
                    type="image/jpg"
                  />
                  <img
                    src="https://picsum.photos/id/60/400"
                    alt="work thumbnail"
                  />
                </picture>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default App;
