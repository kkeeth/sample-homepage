import xSVG from "../assets/twitter-brands.svg";
import githubSVG from "../assets/mark-github.svg";
import instagramSVG from "../assets/instagram-brands.svg";
const Contact = () => {
  return (
    <>
      <div className="w-full h-auto">
        <h1 className="text-center my-8">Contact</h1>
        <div className="flex-row md:flex items-start justify-center p-4">
          <div className="md:w-1/3 p-2">
            <p>
              右のフォームからお気軽にお問い合わせください． なお，Email，SNSの
              DM でも受け付けております．
            </p>
            <div className="flex justify-center mt-12 gap-8">
              <a
                href="https://x.com/kuwahara_jsri"
                target="_blank"
                rel="noreferrer"
              >
                <img src={xSVG} alt="𝕏のロゴ" className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/kkeeth"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubSVG} alt="GitHubのロゴ" className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/kuwahara_jsri"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagramSVG}
                  alt="Instagramのロゴ"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
          <div className="md:w-2/3 h-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScc_w1FgDRkekc4pUYF1aeZuKnQ_16eo4I6Ila9MuuZJ2DWCA/viewform?embedded=true"
              className="w-full"
              height="1119"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
