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
import WebtoonDetail from "./Pages/WebtoonDetail";
import Faq from "./Pages/Faq";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Teenager from "./Pages/Teenager";

function App() {
  return (
    <div className="App">
      {/* <Aside /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/webtoons" element={<Webtoons />} />
        <Route path="/webtoon/:id" element={<WebtoonDetail />} />
        <Route path="/policy">
          <Route path="term" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="teenager" element={<Teenager />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <HoverButton />
      <Footer />
    </div>
  );
}

export default App;
