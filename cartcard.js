

function CartCard(props){
    

    return( 
        <div className="cartProductCard">
            <div className="cartProductName"><strong>{props.item.name}</strong></div>
            <div className="cartProductPrice">${props.item.price}</div>
            <button className="removeButton" onClick= {(id) => props.removeFromCart(props.item.id)}>Remove</button>
        </div>
    )
}


export default CartCard