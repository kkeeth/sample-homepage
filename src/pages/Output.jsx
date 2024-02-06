import { LinkIcon } from "@heroicons/react/24/outline";
import npmSVG from "../assets/n.svg";
import micPNG from "../assets/mic.png";
import standfmJPEG from "../assets/standfm.jpeg";
import riotJPG from "../assets/riot_cover.jpg";

const Output = () => {
  return (
    <>
      <div className="w-full flex-row md:flex md:flex-col justify-center items-center p-4 gap-8">
        <div className="w-full md:flex md:justify-between">
          <div className="md:w-1/2 p-4">
            <img
              src={micPNG}
              alt="ラジオのフリー画像"
              className="h-auto m-auto"
              width="500"
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 p-4 max-md:text-center">
            <h2 className="text-4xl font-semibold text-[#747bff] mb-8">
              ポッドキャスト
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative md:h-60 w-full rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <a
                  href="https://art19.com/shows/kkeethengineers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://content.production.cdn.art19.com/images/c7/1f/e6/af/c71fe6af-3d1b-4566-9096-cdb13e39ced9/6f600fffb78b7af870a56fcf8dcb49757bbf5d368530275f60e49138d0ab91dbb2ed7ca9aeda45198ad73ac45bad2010c8297c2108fc17b00eea0c039505fb44.jpeg"
                    alt="kkeethのエンジニア雑談チャンネルのロゴ"
                    className="h-full w-auto object-cover object-center rounded-lg border-2 m-auto"
                  />
                  <p className="text-center mt-2 text-sm">
                    kkeethのエンジニア雑談チャンネル
                  </p>
                </a>
              </div>
              <div className="relative md:h-60 w-full rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <a
                  href="https://stand.fm/channels/5e70dd5881d4e84e1ff1cab4"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={standfmJPEG}
                    alt="Web業界のなんでも雑談室のロゴ"
                    className="h-full w-auto object-cover object-center rounded-lg border-2 m-auto"
                  />
                  <p className="text-center mt-2 text-sm">
                    Web業界のなんでも雑談室
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex md:justify-between">
          <div className="md:w-1/2 py-12 px-24 lg:ml-20 max-md:text-center">
            <h2 className="text-5xl font-semibold text-[#747bff] mb-8">
              npm
            </h2>
            <ul className="list-inside text-2xl underline list-disc max-md:list-none">
              <li className="">
                <a
                  href="https://www.npmjs.com/package/npm-stats-api"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  npm-stats-api
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/ja-greetings"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  ja-greetings
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/check-stats-modules"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  check-stats-modules
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/get-connpass-items"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  get-connpass-items
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/@kkeeth/card"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  @kkeeth/card
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/cmd-ranking"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  cmd-ranking
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/riot-barcode"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  riot-barcode
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/wcmd"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  wcmd
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.npmjs.com/package/riotx"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-loose"
                >
                  riotx
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4 ">
            <img src={npmSVG} alt="画像2" className="h-auto m-auto" width="500" />
          </div>
        </div>
        <div className="w-full md:flex md:justify-between">
          <div className="md:w-1/2 p-4">
            <img
              src={riotJPG}
              alt="拙著 riotjs の画像"
              className="h-auto m-auto"
              width="500"
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 p-4 max-md:text-center">
            <h2 className="text-5xl font-semibold text-[#747bff] mb-8">
              書籍
            </h2>
            <div>
              <a
                href="https://amzn.asia/d/1JvuDvN"
                target="_blank"
                rel="noreferrer"
                className="flex underline max-md:justify-center"
              >
                <span className="text-xl">Riot.jsで簡単Webアプリ開発 - C&R研究所出版</span>
                <LinkIcon className="h-6 w-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Output;
