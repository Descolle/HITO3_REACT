import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import "./App.css";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";




function App() {
  return (
    <>
      <Home></Home>
      <div className="pizzacontainer">
      <CardPizza/>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
