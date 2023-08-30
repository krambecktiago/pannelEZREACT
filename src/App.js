import Container from "./Components/Container/container";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

//css APP
import "./App.css"

function App() {
  return (
    <div className="container-main">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
