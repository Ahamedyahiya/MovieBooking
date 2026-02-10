import React from "react";
import "./CardList.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Components/Context/CartContext";


function CardList ({name,ticketprice,img,id}){
  const navigate = useNavigate();
const { addToCart } = useContext(CartContext);

const handleAddCart = () => {
  const cartItem = {
    id: id,
    name: name,
    image: img,
    price: ticketprice,
    quantity: 1,
    total: ticketprice,
  };

  addToCart(cartItem);
  alert("🛒 Added to Cart");
  navigate("/cardpage");
};


  return (
    <>
     <div>
        <div className="card shadow">
         <img src={img} className='card-img-top'  alt="error occurred" />
        <div className="card-body">
            <h4 className="text-primary">{name}</h4>
            <h5 className="text-success">₹ {ticketprice}</h5>
        </div>
       </div>
        <div className="button-group">
         <Link to="/cardpage" className="btn btn-outline-success w-100 mt-2 p-2"  onClick={handleAddCart}>Add Cart</Link>
         <Link to={`/viewdetails/${id}`} className="btn btn-warning w-100 mt-2 p-2">View Details</Link>
         </div>
    </div> 
    </>
    )
}


export default CardList;


