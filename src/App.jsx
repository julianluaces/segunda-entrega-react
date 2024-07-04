
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {


  return (

    <div className="App">
        





      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/product/:prodId" element={<ItemDetailContainer />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>


  );
}

export default App
