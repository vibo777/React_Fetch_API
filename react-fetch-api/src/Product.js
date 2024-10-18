import {useState} from 'react';

function Product(Props){

    function doSometing(){
        console.log("Yes sir what can i do for you ?");
    }

    const [isAvailable,setIsAvailable] = useState('Yes');

    function CheckAvailiblity(){
        setIsAvailable('No');
    }

    return(
        <div className="card">
            <div className="card_details">
                <div> 
                    <img className="product_img" src={Props.url} alt=""/>
                </div> 
                <h1>{Props.name}</h1>
                <h2>{Props.price}</h2>
                <button className="product-btn" onClick={(event)=>{
                    console.log(event);
                    doSometing("Vaibhav");
                }}>Buy Now</button>
                <p>Available: {isAvailable}</p>    
                <button onClick={CheckAvailiblity}>Click Me</button>    
            </div>    
        </div>
    )
}

export default Product;

