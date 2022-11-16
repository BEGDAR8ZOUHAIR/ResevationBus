
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import { useEffect } from "react";
import { useState } from "react";
import "./home.css";
import axios from "axios";


const Home = () =>
{
    const [bus, setBus] = useState([]);
    useEffect(() =>
    {
      axios.get('http://localhost:8000/api/buss')
        .then((res) =>
        {
          setBus(res.data);
          console.log(setBus);
          
  
        })
        .catch((err) =>
        {
          console.log(err);
        });
    }, []);
  
    console.log("dd", bus);
    return (
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          {bus.map((item) =>
            <PropertyList item={item} />
          )}
          
        </div>
      </div>
    );
  };


export default Home;
