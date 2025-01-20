import "./App.css";
import Home from "./pages/home/Home.jsx";
import News from "./pages/news/News.jsx";
import Arrangements from "./pages/arrangements/Arrangements.jsx";
import Info from "./pages/info/Info.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Member from "./pages/member/Member.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import { useRoutes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Article from "./pages/article/Article.jsx";

function App() {
  const location = useLocation();

  /* Lowercase tilføjes da den ellers ikke kan finde Login-side */
  const Path = location.pathname.toLowerCase();

  const isLoginPage = Path === "/login";
  const isHomePage = Path === "/";

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/news", element: <News /> },
    { path: "/article/:id", element: <Article /> },
    { path: "/arrangements", element: <Arrangements /> },
    { path: "/info", element: <Info /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/member", element: <Member /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <Profile /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <>
      {!isLoginPage && !isHomePage && <Navbar />}
      <div>{routes}</div>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
