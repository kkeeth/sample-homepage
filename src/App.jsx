import "./App.css";

const App = ({ children }) => {
  return (
    <>
      <h1>Welcome My Homepage!</h1>
      <div>{children}</div>
    </>
  );
};

export default App;
