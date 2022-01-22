import './App.css';
import { NavBar} from './NavBar'
import {ItemList} from './Components/itemlist'
import {ItemCount} from './Components/ItemCount'

function App() {
  return (

    <div className="App">
      <NavBar />
      <section>
        <div className='Product'>
          <ItemList product='Zapatillas' description='Talle 45' price='$150'/>
          <ItemCount product='Zapatillas'/>
        </div>
        <div className='Product'>
        <ItemList product='Guitarra' description='Medida 3/4' price='$350'/> 
        <ItemCount product='Guitarra'/>

        </div>
        <div className='Product'>
        <ItemList product='Campera' description='Talle S' price='$200'/>
        <ItemCount product='Campera'/>
        </div>
      </section> 
    </div>
  );

}

export default App;