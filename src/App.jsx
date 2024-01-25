import "./App.css";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-visual">
          <img src="bg-image.jpeg" alt="メインビジュアル" />
          <div className="main-text">
            <h2>Kuwahara Keeth Kiyohito</h2>
            <p>it is my portfolit site</p>
          </div>
        </div>
        <section id="about">
          <h2 className="section-title">about</h2>
          <p className="bio">
            1987年岡山県生まれ
            <br className="" />
            個人事業主として Web
            アプリケーション開発・アドバイザリーをしております。
            <br />
            2011年、株式会社〇〇にて Web Developer としての人生を開始。
            <br />
            2013~2015年、２度の転職を経つつ PL・PjM など幅広い業務経験を積む。
            <br />
            2018年より個人事業主として開業し、会社員として二足のわらじで活動中。
          </p>
          <div className="profile">
            <div className="flex-box-left">
              <img
                src="https://cdn.stand.fm/images/01G444ZTY6HXVBFPE509JWJ9XM.jpg"
                alt="顔写真"
              />
            </div>
            <div className="flex-box-right">
              <dl>
                <dt>名前:</dt>
                <dd>桑原聖仁（Kuwahara KEETH Kiyohito）</dd>
                <dt>所在地:</dt>
                <dd>東京都板橋区</dd>
                <dt>email:</dt>
                <dd>zensin0082@gmail.com</dd>
                <dt>𝕏:</dt>
                <dd>@kuwahara_jsri</dd>
              </dl>
            </div>
          </div>
        </section>
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
        <section id="news">
          <h2 className="section-title">News</h2>
          <dl className="news-items">
            <div className="item">
              <dt>2022.xx.xx</dt>
              <dd>ホームページをリニューアルしました。</dd>
            </div>
            <div className="item">
              <dt>2022.xx.xx</dt>
              <dd>新規事業【○○】に関する参考資料を公開しました。</dd>
            </div>
            <div className="item">
              <dt>2022.xx.xx</dt>
              <dd>実績紹介【○○】を更新しました。</dd>
            </div>
            <div className="item">
              <dt>2022.xx.xx</dt>
              <dd>新サービス○○の提供を始めました。詳細はこちらから。</dd>
            </div>
            <div className="item">
              <dt>2022.xx.xx</dt>
              <dd>事業紹介セミナー「WEB制作」を行います。参加はこちらから。</dd>
            </div>
          </dl>
        </section>
        <section id="links">
          <h2 className="section-title">Links</h2>
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
              <img
                src="/docs/6/Spotify_Icon_CMYK_Green.png"
                alt="Spotifyのロゴ"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
