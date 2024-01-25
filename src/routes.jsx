import App from "./pages/App";
import Output from "./pages/Output";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BaseLayout from "./components/BaseLayout";

export default [
  {
    path: "/",
    name: "Home",
    element: (
      <BaseLayout>
        <App />
      </BaseLayout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/profile",
    name: "Profile",
    element: (
      <BaseLayout>
        <Profile />
      </BaseLayout>
    ),
  },
  {
    path: "/output",
    name: "Output",
    element: (
      <BaseLayout>
        <Output />
      </BaseLayout>
    ),
  },
  {
    path: "/contact",
    name: "Contact",
    element: (
      <BaseLayout>
        <Contact />
      </BaseLayout>
    ),
  },
];
