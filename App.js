import "./App.css";
import Navbar from "./navbar";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import ProductCard from "./card";
import { useState } from "react";
import Modal from "./cartModal";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Product1", price: "40", img: "#", inCart: false },
    { id: 2, name: "Product2", price: "60", img: "#", inCart: false },
    { id: 3, name: "Product3", price: "30", img: "#", inCart: false },
    { id: 4, name: "Product4", price: "35", img: "#", inCart: false },
    { id: 5, name: "Product5", price: "70", img: "#", inCart: false },
    { id: 6, name: "Product6", price: "40", img: "#", inCart: false },
    { id: 7, name: "Product7", price: "90", img: "#", inCart: false },
    { id: 8, name: "Product8", price: "120", img: "#", inCart: false },
  ]);

  const [show, setShow] = useState(false);
  let [cartItems, setCartItems] = useState([]);
  function cartButtonHandler() {
    setShow(true);
  }
  function toCartButtonHandler(id) {
    const [selected] = data.filter((item) => item.id === id);
    const selectedIndex = data.indexOf(selected);
    data[selectedIndex].inCart = true;
    setData(data);
    cartItems = [...cartItems, selected];
    setCartItems(cartItems);
  }

  function removeFromCart(id) {
 
    const [selected] = data.filter((item) => item.id === id);
    const selectedIndex = data.indexOf(selected);
    data[selectedIndex].inCart = false;
    setData(data);
    cartItems.splice(cartItems.indexOf(selected), 1);
    setCartItems(cartItems);
  }
  return (
    <div className="layout">
      <Navbar
        show={show}
        setShow={setShow}
        cartClick={cartButtonHandler}
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
      />
      <Header />
      <Content>
        {data.map((product) => {
          return (
            <ProductCard datas={product} addToCart={toCartButtonHandler} />
          );
        })}
      </Content>
      <Footer />
    </div>
  );
}

export default App;
