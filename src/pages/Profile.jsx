import "./Profile.css";

const Profile = () => {
  return (
    <>
      <h1 className="section-title">Profile</h1>
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
    </>
  );
};

export default Profile;
