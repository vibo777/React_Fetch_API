import {useEffect,useState} from 'react';


function User(){
 
    let [users,setUsers] = useState([]);


    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then((response)=>response.json())
       .then((data)=>{
         setUsers(data);
       })
       .catch((err)=>{
         console.log(err);
       }) 
    },[])
    
     
     return (
       <div className="App">
         {
           users.map((user,index)=>{
               return(
                 <div>
                   <h1 key={index}>{user.id}. {user.username}</h1>
                   <h2 key={index}>{user.name}</h2>  
                 </div>
               )
           })
   
         }
       </div>
     );
}

export default User;