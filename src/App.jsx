import "./App.css";
import Home from "./pages/home/Home.jsx";
import News from "./pages/news/News.jsx";
import Arrangements from "./pages/arrangements/Arrangements.jsx";
import Info from "./pages/info/Info.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import Member from "./pages/member/Member.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { useRoutes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import { useState } from "react";

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

  let addNav = false;

  const location = useLocation();

  if (location.pathname != "/") {
    addNav = true;
  } else {
    addNav = false;
  }

  return (
    <>
      {addNav ? <Navbar /> : ""}
      <div> {routes}</div>
      <Footer />
    </>
  );
}

export default App;
