import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import New from "./Pages/New";
import Webtoons from "./Pages/Webtoons";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import HoverButton from "./Components/HoverButton";
import Ribbon from "./Components/Ribbon";

function App() {
  return (
    <div className="App">
      {/* <Aside /> */}
      <Navbar />
      <Ribbon
        line1="Sign Up now and save your favorite webtoons."
        line2="Sign Up ›"
        link="#"
      />
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
