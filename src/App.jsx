import "./App.css";
import Home from "./pages/home/Home.jsx";
import News from "./pages/news/News.jsx";
import Arrangements from "./pages/arrangements/Arrangements.jsx";
import Info from "./pages/info/Info.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Member from "./pages/member/Member.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { useRoutes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/news", element: <News /> },
    { path: "/arrangements", element: <Arrangements /> },
    { path: "/info", element: <Info /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/member", element: <Member /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <Profile /> },
  ]);

  return (
    <>
      <div> {routes}</div>
      <Footer />
    </>
  );
}

export default App;
