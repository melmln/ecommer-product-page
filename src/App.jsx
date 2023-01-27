import './App.css'
// components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Cart from './components/Cart/Cart';

function App() {

  return (
    <>
      <header>
        <Nav/>
      </header>
       <Product/>
      <Footer/>
    </>
  )
}

export default App;
