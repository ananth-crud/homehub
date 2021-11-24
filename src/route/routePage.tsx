import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../screens/home";
export function RoutePage() {
  const check = () => {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      windowWidth = w.innerWidth || e.clientWidth || g.clientWidth; //window width

    return windowWidth; //returns true for widths larger than 568 pixels
  };
  console.log(check());
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
