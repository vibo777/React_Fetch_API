function Product(Props){

    console.log(Props);

    return(
        <div className="card">
            <div className="card_details">
                <h1>{Props.name}</h1>
                <h2>{Props.price}</h2>
            </div>    
        </div>
    )
}

export default Product;

