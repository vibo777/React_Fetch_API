//import { useState } from 'react';
import './App.css'; 
// import ProductList from './ProductList';
// import HeaderComponent from './HeaderComponent';

function App() {

  // let [name,setName] = useState('');

    let countries = [
      {name:"India" , capital:"New Delhi"},
      {name:"Australia" , capital:"Canberra"},
      {name:"New Zealand" , capital:"Wellington"}
    ]

    return(
      <div className='App'>
        {
            countries.map((country,index)=>{

              return(
                <div className='box' key={index}>
                  <h2>{country.name}</h2>
                  <h3>{country.capital}</h3>
                </div>
              )
            })
        }

        {/* <h2>Name : {name}</h2>
        <input type="text" onChange={(event)=>{
          setName(event.target.value);
        }} placeholder='Enter your name'/> */}
       


        {/* <h1>Welcome Everyone !!!</h1>
        <HeaderComponent/> 
        <ProductList/> */}
      </div>
    )
}

export default App;
