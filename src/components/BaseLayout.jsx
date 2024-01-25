import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
