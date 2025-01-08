import "./App.css";
import Frontpage from "./pages/frontpage/frontpage.jsx";
import { useRoutes } from "react-router-dom";

function App() {
  let routes = useRoutes([
    {
      element: <Frontpage />,
      path: "/",
    },
    {},
  ]);

  return <>{routes}</>;
}

export default App;
