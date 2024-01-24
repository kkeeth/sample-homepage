import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default BaseLayout;
