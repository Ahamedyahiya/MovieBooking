import React from 'react'
import {useState,useEffect,useContext } from 'react';
import CardList from '../Components/CardList';
import { DataContext } from "../Components/Context/DataProvider";
import "./HomePage.css";

const HomePage = () => {
const [data,setData] = useState([]);
const { search } = useContext(DataContext);
useEffect(()=>{
   
        fetch("https://backend-crud-one.vercel.app/product")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setData(data);
            
        })
        .catch((err)=>{
            console.log("error:",err);
        })

    },[]);

    const dataList = data.filter((item)=>{

        return item.name.toLowerCase().includes(search.toLowerCase());
    })

 return (
    <>
    <div>
       <div className="container mt-5 p-0">
            <div className="row  m-0">
                 {dataList.map((item,index)=>(
                     <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
                          <CardList
                            id={item._id}
                            name={item.name}
                            ticketprice={item.ticketprice}
                            img={item.image}
                            ReleaseDate={item.releasedate}
                            Director={item.director}
                            Budget={item.budget}
                            Description={item.description}
                          />
                     </div>
      ))}
            </div>
        </div>
    </div>
    </>
  )
}


export default HomePage;

