import {useEffect,useState} from 'react';

export default function NewProduct(){

    let [name,setName] = useState("Vaibhav");
    let [age,setAge] = useState(22);

    
    useEffect(()=>{
        console.log("Component is Re-renderd");
    },[name]) 


    return(
        <div className="newproduct">
            <h2>Samsung M21</h2>
            <h3>{name}</h3>
            <button className='btn' onClick={()=>{
                setName('Vibo');
            }}>Click Here</button>

            <h3>{age}</h3>    
            <button onClick={()=>{
                setAge('28');
            }}>Click Here</button>
        </div>
    )

}