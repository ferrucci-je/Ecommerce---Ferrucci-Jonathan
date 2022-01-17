import './App.css';
import { NavBar} from './NavBar'
import {ItemList} from './MyComponentsClass/itemlist'

function App() {
  return (

    <div className="App">
      <NavBar />
      <section>
        <ItemList product='Zapatillas' description='Talle 45' price='$150'/> 
        <ItemList product='Guitarra' description='Medida 3/4' price='$350'/> 
        <ItemList product='Campera' description='Talle S' price='$200'/>
      </section> 
    </div>
  );

}

export default App;