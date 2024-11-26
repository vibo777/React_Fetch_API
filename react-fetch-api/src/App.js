import { useEffect, useState } from 'react';
import './App.css'; 

// import ProductList from './ProductList';
// import HeaderComponent from './HeaderComponent';
// import NewProduct from './NewProduct';

function App() {

  // let [name,setName] = useState('');

    // let countries = [
    //   {name:"India" , capital:"New Delhi"},
    //   {name:"Australia" , capital:"Canberra"},
    //   {name:"New Zealand" , capital:"Wellington"}
    // ]

    // let [ShowProduct,SetShowProduct] = useState('false');

    let[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data=>{
          setUsers(data);
        }))    
        .catch((err)=>{
          console.log(err);
        })
    },[])


    return(
   
      <div className='container'>
     
        {/* <button onClick={()=>{
          SetShowProduct(true);
        }}>Show Product</button>

        <button onClick={()=>{
          SetShowProduct(false);
        }}>Hide Product</button> */}


        {/* <HeaderComponent/> 
        <ProductList/>  */}
        {/* {
          
          ShowProduct === true?
          (
            <NewProduct/>
          )
          :null
        } */}
         
        {
            users.map((user)=>{
              return(
                <div className='users-area' key={user.id}>
                    <h1>Name : {user.name}</h1>
                    <h3>Email:{user.email}</h3>
                    <h3>{user.phone}</h3>
                    <h3>{user.company.name}</h3>
                    <h3>{user.website}</h3>
                  </div>
              )     
            })
        }

     </div>
    )
}

export default App;
