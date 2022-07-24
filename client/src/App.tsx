import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register, Home, RouteGuard } from "./views";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App(): JSX.Element {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<RouteGuard isAuth={user} />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
