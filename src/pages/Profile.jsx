const Profile = () => {
  return (
    <>
      <div className="flex-row md:flex items-center justify-center ">
        <div className="md:w-1/2 pl-4 pr-2">
          <div className="text-center">
            <img
              src="https://cdn.stand.fm/images/01G444ZTY6HXVBFPE509JWJ9XM.jpg"
              alt="顔写真"
              className="w-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-4 border-gray-300 mt-4 lg:mt-0">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">桑原聖仁</h1>
            <p className="max-w-2xl text-sm leading-6 text-gray-500">
              Kuwahara KEETH Kiyohito
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  所属企業
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <a
                    href="https://yumemi.co.jp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    株式会社ゆめみ
                  </a>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  メールアドレス
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  zensin0082@gmail.com
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  経歴
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  1987年岡山県生まれ
                  <br className="" />
                  個人事業主として
                  Webアプリケーション開発・プログラミング講師・ピープルマネジメント・コーチングを行う．
                  <br />
                  2011年、都内ベンチャー企業にて Web Developer
                  としての人生を開始．
                  <br />
                  2013〜2015年，２度の転職を経つつ
                  PL・PjMなど幅広い業務経験を積む．
                  <br />
                  2018年より個人事業主として開業し，会社員として二足のわらじで活動中．
                  <br />
                  毎日ポッドキャストで様々なことを雑談形式で配信中．
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  𝕏
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <a
                    href="https://x.com/kuwahara_jsri"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @kuwahara_jsri
                  </a>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  GitHub
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <a
                    href="https://github.com/kkeeth"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @kkeeth
                  </a>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  ポッドキャスト
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <a
                    href="https://art19.com/shows/kkeethengineers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    kkeethのエンジニア雑談チャンネル
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
