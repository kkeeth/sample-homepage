import "./App.css";
import keyVisual from "../assets/bg-image.png";

const App = () => {
  return (
    <>
      <div className="h-[800px] w-auto relative isolate overflow-hidden">
        <img
          className=" h-full object-cover opacity-30"
          src={keyVisual}
          alt="キービジュアル画像"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white text-center">
          <h1 className="w-screen text-4xl tracking-tight text-gray-900 sm:text-6xl">
            Kuwahara KEETH Kiyohito
          </h1>
          <p className="mt-6 text-2xl leading-8 text-gray-600">
            Welcome to my homepage. Thanks.
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
