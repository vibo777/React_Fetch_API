import { useEffect, useState } from "react";
import './Dummy.css'
// to store array of object which we fetch from API we need state variable 



 
function Dummy(){
     
    let [dummyusers, setdummyUsers] = useState([]);

    useEffect(()=>{
        
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            setdummyUsers(data);
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])    


    return(
        <div className="usertable">
            <table>
                <tr>
                    <th>Id</th>
                    <th className="rowspan">Name</th>
                    <th className="rowspan">Username</th>
                    <th className="rowspan">Website</th>
                </tr> 
            </table>
               
            {
                dummyusers.map((user,index)=>{
                    return(
                        
                            <table>
                                <tr>
                                    <td>{user.id}</td>
                                    <td className="rowspan">{user.name}</td>
                                    <td className="rowspan">{user.username}</td>
                                    <td className="rowspan">{user.website}</td>
                                </tr>
                            </table>
                         
                    )
                })    
            }       
        </div>
    )

}

export default Dummy;