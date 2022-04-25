import { Route, Routes } from "react-router-dom";
import "./App.scss";
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
import My from "./Pages/My";
import { api_check_login } from "./API";
import { useDispatch } from "react-redux";
import { LOGIN, LOGOUT } from "./Redux/constants";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Community from "./Pages/Community";
import CommunityArticle from "./Pages/CommunityArticle";
import Write from "./Pages/Write";

function App() {
  let dispatch = useDispatch();
  api_check_login()
    .then((res) => {
      dispatch({ type: LOGIN, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGOUT });
    });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/webtoons" element={<Webtoons />} />
        <Route path="/webtoon/:_id" element={<WebtoonDetail />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<CommunityArticle />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/policy">
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="teenager" element={<Teenager />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route exact path="/write" element={<Write />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/my" element={<My />} />
        </Route>
      </Routes>
      <HoverButton />
      <Footer />
    </div>
  );
}

export default App;
