//import { useState } from 'react';
import './App.css'; 
import ProductList from './ProductList';
import HeaderComponent from './HeaderComponent';

function App() {

  // let [name,setName] = useState('');

    // let countries = [
    //   {name:"India" , capital:"New Delhi"},
    //   {name:"Australia" , capital:"Canberra"},
    //   {name:"New Zealand" , capital:"Wellington"}
    // ]

    return(
   

      <div>
        <h1>Welcome Everyone !!!</h1>
        <HeaderComponent/> 
        <ProductList/> 
     </div>
    )
}

export default App;
