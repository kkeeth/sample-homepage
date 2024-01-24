import App from "./App.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import BaseLayout from "./components/BaseLayout.jsx";

export default [
  {
    path: "/",
    element: (
      <BaseLayout>
        <App />
      </BaseLayout>
    ),
    errorElement: (
      <>
        <h2>Oops!!</h2>Back to <a href="/">TOP</a>
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <BaseLayout>
        <Blog />
      </BaseLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <BaseLayout>
        <Contact />
      </BaseLayout>
    ),
  },
];
