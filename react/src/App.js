import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import Navbar from "./Components/Navbar";
import New from "./Pages/New";
import Webtoons from "./Pages/Webtoons";

function App() {
  return (
    <div className="App">
      <Aside />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<New />} />
        <Route path="/webtoons" element={<Webtoons />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
