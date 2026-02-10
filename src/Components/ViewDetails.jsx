import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ViewDetails.css";

const ViewDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("error:", err));
  }, [id]);

  if (!data) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3 text-primary">Loading Movie Details...</p>
      </div>
    );
  }

  return (
    <div className="view-details-page">
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {data &&(            
              <div className="movie-card shadow-lg">
                  <img src={data.image} alt={data.name} className="movie-img"/>
              <div className="movie-content">
                  <h2 className="movie-title">{data.name}</h2>
              <div className="row mt-4">
                  <div className="col-md-6">
                    <p><span>🎟 Ticket Price: ₹ </span> {data.ticketprice}</p>
                    <p><span>📅 Release Date:</span> {data.releasedate}</p>
                  </div>

                  <div className="col-md-6">
                    <p><span>🎬 Director:</span> {data.director}</p>
                    <p><span>💰 Budget:</span> {data.budget}</p>
                  </div>
                </div>

                <hr />

                <p className="description">
                  <span>📝 Description:</span><br />
                  {data.description}
                </p>

              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
