import "./App.css";
import Frontpage from "./pages/frontpage/frontpage.jsx";
import { useRoutes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";

function App() {
  let routes = useRoutes([
    {
      element: <Frontpage />,
      path: "/",
    },
    {},
  ]);

  return (
    <>
      <div> {routes}</div>
      <Footer />
    </>
  );
}

export default App;
