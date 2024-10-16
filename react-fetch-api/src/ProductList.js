import Product from "./Product";

function ProductList(){

    return(
        <div className="product_list">
          <Product name="JBL GO 3" price="1200 RS"/>
          <Product name="Nike Shoes" price="2000 RS"/>
          <Product name="Titan Watch" price="10000 RS"/>
          <Product name="Bike Lubricant" price="500 RS"/>
        </div>
    )
}

export default ProductList;

