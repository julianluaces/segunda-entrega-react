
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react';


function App() {


  return (

    <div className="App">

<ChakraProvider/>
      

      <NavBar />

      <ItemListContainer greeting={'Experiencia de sabores'} />

  

 <ChakraProvider/>

    </div>


  );
}

export default App
