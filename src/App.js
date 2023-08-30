import Container from "./Components/Container/container";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

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
