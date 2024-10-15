import './App.css';
import Demo from './Demo'; 
import User from './User';
import Product from './Product';
import Multicomponent from './Multicomponent';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dummy from './Dummy';

function App() {
    return(
      <div>
        <h1>This is React App</h1>
        <Multicomponent/>
        <Multicomponent/>

        {/* <Product/>

        <BrowserRouter>
          
          <Routes>
            
            <Route path="/demo" element={<Demo/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/dummy" element={<Dummy/>}/>
          </Routes>
        
        </BrowserRouter> */}


      </div>
    )

}

export default App;
