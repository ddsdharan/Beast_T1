import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/homePage";
import CoachDetails from "./pages/coachDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/coach/:slug"
          element={<CoachDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;