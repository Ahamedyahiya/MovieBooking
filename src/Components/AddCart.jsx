  import React, { useState, useEffect } from "react";
  import { useParams,Link,useNavigate  } from "react-router-dom";
  import "./AddCart.css";

  const AddCartPage = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [count, setCount] = useState(1);
    const navigate = useNavigate();
     const handleRemove = () => {
          alert("Item removed from cart ❌");
          navigate("/");
     };
    const handleOrder = () => {
       alert(" ✅ Order placed successfully!");
    };

   useEffect(() => {
       const isLoggedIn = localStorage.getItem("isLogin");

         if (!isLoggedIn) {
           navigate("/login");
           return;
         }

    fetch(`https://backend-crud-one.vercel.app/product/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log("error:", err));
    }, [id,navigate]);

    if (!data) {
      return (
        <div className="loading-container">
          <div className="spinner-border text-primary"></div>
          <p className="mt-3 text-primary">Loading...</p>
        </div>
      );
    }

  const total = count * data.ticketprice;

    return (
      <>
     <Link to="/" className="btn btn-warning mt-4 ms-3" style={{textDecoration:"none"}}>Back To Home</Link>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card cart-card shadow-lg p-4">
              <div className="row align-items-center">
                
                <div className="col-md-4 text-center">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="img-fluid cart-img"
                  />
                </div>

                <div className="col-md-8">
                  <h4 className="fw-bold">{data.name}</h4>
                  <h5 className="text-success">₹ {data.ticketprice}</h5>

                  <div className="d-flex align-items-center mt-3">
                    <button
                      className="btn btn-outline-danger qty-btn"
                      onClick={() => count > 1 && setCount(count - 1)}
                    >
                      −
                    </button>

                    <span className="qty-count mx-3">{count}</span>

                    <button
                      className="btn btn-outline-success qty-btn"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="button-group d-flex  gap-3">
                  <button className="btn btn-danger mt-3" onClick={handleRemove}>Remove</button>
                  <button className="btn btn-primary mt-3" onClick={handleOrder}>Ordered</button>
                 </div>
                    <p className="text-secondary mt-3">Total Amount: ₹{total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>


      </>
    );
  };

  export default AddCartPage;
