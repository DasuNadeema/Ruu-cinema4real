import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import Movie from "./component/Movie";
import Main from "./pages/Main";
import Schedule from "./pages/Schedule";
import Card from "./pages/Card";
import Tv from "./pages/Tv";

function App() {
  return (
    <>
      <Header />
      <Movie />
      <Main />
      <Tv />
    </>
  );
}

export default App;
