import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345678"
            title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses"
            price={345.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id="12346789"
            title="LG 260L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)"
            price={24490.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/31jo5pyShXL._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12347890"
            title="Redmi 10A (Slate Grey, 3GB RAM, 32GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster"
            price={8499.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71kVEmAMyEL._SX679_.jpg"
          />
          <Product
            id="12348901"
            title="Noise ColorFit Pro 4 Advanced Bluetooth Calling Smart Watch with 1.72 TruView Display"
            price={2998.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61qEontdesL._SX679_.jpg"
          />
          <Product
            id="12349012"
            title="boAt Immortal IM1000D Dual Channel Wired On Ear Gaming Headphones with Dolby Atmos"
            price={1874.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Xk0CSu6IS._SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12340123"
            title="Mi 80 cm (32 inches) 5A Series HD Ready Smart Android LED TV L32M7-5AIN (Black)"
            price={12999.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tD7OZ0RXL._AC_SX960_SY720_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
