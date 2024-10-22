import { useState } from 'react';
import './App.css'; 
// import ProductList from './ProductList';
// import HeaderComponent from './HeaderComponent';

function App() {

  let [name,setName] = useState('');

    return(
      <>
        <h2>Name : {name}</h2>
        <input type="text" onChange={(event)=>{
          setName(event.target.value);
        }} placeholder='Enter your name'/>
       


        {/* <h1>Welcome Everyone !!!</h1>
        <HeaderComponent/> 
        <ProductList/> */}
      </>
    )
}

export default App;
