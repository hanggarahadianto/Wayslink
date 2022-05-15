import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import Template from "./Pages/Template";
import Result from "./Pages/Result";
import MyLink from "./Pages/MyLink";
import Profile from "./Pages/Profile";
import Edit from "./Pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/myLink" element={<MyLink />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
