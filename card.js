import React from "react"
import sample from "./sample.jpg"

function ProductCard(props){
    return(
        <div className="productCard">
            <div className="productImage"><img src={sample} alt="No Image Found"></img></div>
            <h2 className="productName">{props.datas.name}</h2>
            <p className="productPrice">${props.datas.price}</p>
            <button className="addCartButton" onClick={(id) => props.addToCart(props.datas.id)} disabled={props.datas.inCart}>Add to Cart</button>
        </div>
    )
}


export default ProductCard