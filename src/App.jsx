
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import Home from './components/Home';



function App() {


  return (

    <div className="App">


      <NavBar />
      <Home />
      <ItemListContainer className='item-list' greeting={'Bienvenidos'} />

      <ItemDetailContainer />




      <Footer />

    </div>


  );
}

export default App
