import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from "react-bootstrap/Button";
import {Button} from "react-bootstrap";
import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Error from "./components/layouts/Error";

import {
  BrowserRouter as Router,
  Switch, 
 
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      <Header />
      <Home />
      
      <Footer /> 
    </div>
  );
}

export default App;
