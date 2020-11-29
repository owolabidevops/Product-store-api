import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Home.css";
import axios from "./axioss";

function Home() {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/getproducts");
      setProducts(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(products);
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg"
        alt=""
      />

      {/* product id .title ,price, image    */}

     

      <div className="home_row">
        {products.map(({ title, price, image }) => (
          <Product title={title} price={price} image={image}  />
        ))}
      </div> 
    </div>
  );
}

export default Home;
