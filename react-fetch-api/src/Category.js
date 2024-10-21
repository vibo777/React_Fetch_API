function Category(Props){
    console.log(Props)
    return(
        <div className="category_component">
            <img src={Props.src} alt="category Image"/>
            <h4>{Props.name}</h4>
        </div>
    )
}

export default Category;