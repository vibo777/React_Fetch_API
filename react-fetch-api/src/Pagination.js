import {useState,useEffect} from "react";
import './App.css'

export default function Pagination(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((user=>{
            setData(user);    
        })) 
        .catch((err)=>{
            console.log("Error while fetching API...");
        })
    },[])

    return(
        <div className="container Pagination">
            <h1 className="text-center">Pagination Design</h1>

            {
                data.map((post)=>{
                    return(
                        <div className="blog_posts" key={post.id}>
                            <h1>{post.title}</h1>
                            <h5>{post.body}</h5> 
                        </div>
                    )
                })
            }
            
        </div>

        
    )

}
  
 