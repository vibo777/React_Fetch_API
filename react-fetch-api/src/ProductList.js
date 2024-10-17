import Product from "./Product";

function ProductList(){

    return(
        <div className="product_list">
          <Product name="JBL GO 3" price="1200 RS" url="https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5bf276ec/JBL_GO_3_HERO_BLUE_0077_1605x1605px.png?sw=535&sh=535"/>

          <Product name="Nike Shoes" price="2000 RS" url="https://static.nike.com/a/images/t_default/b14aba9a-f828-45d3-9607-b687b884aa7d/NIKE+REVOLUTION+7+EASYON.png"/>
          
          <Product name="Titan Watch" price="10000 RS" url="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/t/6/e/-original-imagqfwchgp7yw8f.jpeg?q=70"/>
          
          <Product name="Polo T-shirt" price="547 RS" url="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxozjlkOGc8f6AdskUoxspVV45cT3penWoi1cSl2WVRuUeAIB3mg9SkXqb8gmULDUbdCs4acyCKCafWjKkqY6nAzmwAFlkN04mqe7VzSce"/>
       
       
        </div>
    )
}

export default ProductList;

