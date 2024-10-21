import './App.css'; 
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import HeaderComponent from './HeaderComponent';

function App() {

    return(
      <>
        <h1>Welcome Everyone !!!</h1>
        <HeaderComponent/> 
        <CategoryList/>
        <ProductList/>
        
      </>
    )
}

export default App;
