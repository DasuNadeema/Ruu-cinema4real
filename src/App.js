import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Movie from "./component/Movie";
import Main from "./component/Main";
import Schedule from "./component/Schedule";
import Card from "./component/Card";
import Tv from "./component/Tv";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Movie />
      <Main />
      <Tv />
      <Footer />
    </>
  );
}

export default App;
