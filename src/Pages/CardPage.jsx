import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Components/Context/CartContext";
import "./CardPage.css"; 

const CardPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return <h3 className="text-center mt-5">🛒 Cart is Empty</h3>;
  }
   const handleOrder = () => {
       alert(" ✅ Order placed successfully!");
   };

  return (
    <>
     <Link to="/" className="btn btn-warning mt-4 ms-3" style={{textDecoration:"none"}}>Back To Home</Link>
    <div className="container my-5">
      {cart.map((item) => {
           const total = item.quantity * item.price;

        return (
          <div key={item.id} className="card cart-card shadow-lg p-4 mb-4">
            <div className="row align-items-center">
              
              <div className="col-md-4 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid cart-img"
                />
              </div>

              <div className="col-md-8">
                <h4 className="fw-bold">{item.name}</h4>
                <h5 className="text-success">₹{item.price}</h5>


                <div className="d-flex align-items-center mt-3">
                  <button
                    className="btn btn-outline-danger qty-btn"
                    onClick={() =>
                      item.quantity > 1 &&
                      updateQuantity(item.id, item.quantity - 1)}> − </button>

                  <span className="qty-count mx-3">
                    {item.quantity}
                  </span>
                   <button className="btn btn-outline-success qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}> +</button>
                </div>
 
                <div className="d-flex gap-3 mt-3">
                  <button  className="btn btn-danger" onClick={() => removeFromCart(item.id)}> Remove </button>
                  <button className="btn btn-primary"  onClick={handleOrder}> Ordered </button>
                </div>
                   <p className="text-secondary mt-3"> Total Amount: ₹{total} </p>
              </div>
            </div>
         </div>
        );
      })}
    </div>
   </> 
  );
};

export default CardPage;
