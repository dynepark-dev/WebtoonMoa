import "./App.css";
import Aside from "./Components/Aside";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import WebtoonList from "./Components/WebtoonList";

function App() {
  return (
    <div className="App">
      <Aside />
      <Navbar />
      <Banner />
      <Main />
      <WebtoonList />
      <Footer />
    </div>
  );
}

export default App;
