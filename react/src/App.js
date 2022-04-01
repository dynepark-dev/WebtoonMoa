import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import New from "./Pages/New";
import Webtoons from "./Pages/Webtoons";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import HoverButton from "./Components/HoverButton";

function App() {
  return (
    <div className="App">
      {/* <Aside /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/webtoons" element={<Webtoons />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <HoverButton />
      <Footer />
    </div>
  );
}

export default App;
