import React from "react";
import "./Fashion.css";

const Fashion = () => {
  return (
    <div>
      <ul style={{ display: "flex" }}>
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#Shop">Shop</a>
        </li>
        <li>
          <a href="#Discover">Discover</a>
        </li>
        <li>
          <a href="#Orders">Orders</a>
        </li>
        <h1>
          <li style={{ marginTop: "0%", paddingRight: "18%" }}>
            <a href="#logoipsum">
              <img
                src="https://icones.pro/wp-content/uploads/2021/11/icone-de-feuille-noire.png"
                alt="n"
                height="4%"
                width="4%"
              />
              LOGO<span>IPSUM</span>
            </a>
          </li>
        </h1>
      </ul>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "55%", fontSize: "50px" }}>
          <h1 className="b">FASHION</h1>
        </div>
        <div style={{ width: "45%" }}>
          <p className="b">
            New Summer Collections get it now and enjoy your <br />
            summer Vacations with the latest trend
            <br />
            <button>Buy Now</button>
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <img
          src="https://www.stylecraze.com/wp-content/uploads/2021/02/55-Fashion-Quotes-In-Hindi-Banner.jpg.webp"
          alt=""
          style={{ height: "700px", width: "700px" }}
        />
        <img
          src="https://thumbs.dreamstime.com/b/portrait-two-sexy-pretty-beautiful-women-fashion-style-clothes-sisters-long-curly-hair-perfect-make-up-people-lifestyle-113021487.jpg"
          alt=""
          style={{ height: "700px", width: "400px" }}
        />
      </div>
      <div>
        <h1>
          Where <span id="border_radius">fashion takes</span> the helm,and you
          embark on a journey
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <h1
          style={{
            color: "orangered",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          Best Of The Week
        </h1>
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style={{ height: "300px", width: "250px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?cs=srgb&dl=pexels-spencer-selover-428338.jpg&fm=jpg"
              alt=""
              style={{ height: "300px", width: "250px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Modern Style For You</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://www.shutterstock.com/image-photo/fashion-model-beautiful-young-woman-260nw-598339082.jpg"
              alt=""
              style={{ height: "300px", width: "250px" }}
            />
            <div className="card-body">
              <h3 className="card-title">See More</h3>
              <button>more</button>
            </div>
          </div>
        </div>
        <h1
          style={{
            color: "orangered",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          Latest Man Cloth Collections
        </h1>
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Trenchcoat.jpg"
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://i.pinimg.com/236x/c8/e5/41/c8e54136c29967b8272228c2eed5cb28.jpg"
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://i.pinimg.com/736x/a2/38/d7/a238d708a3c357f8a18db267b4a86275.jpg"
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://i.pinimg.com/564x/16/ac/c3/16acc39b10be8a011e844e2c6004ecdd.jpg"
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
        </div>

        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://img.freepik.com/premium-photo/young-bearded-man-model-fashion-sitting-urban-step-wearing-casual-clothes_1139-1325.jpg"
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://i.pinimg.com/474x/27/09/c1/2709c12282ad3cd46b4754406ac4f79b.jpg"
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://media.istockphoto.com/id/694450136/photo/take-a-moment-to-enjoy-the-streets-of-the-city.jpg?s=612x612&w=0&k=20&c=oKOF7fkNFleU3tPbKmEiUOB4q1jujsgoG_pMUwfgBUY="
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://i.pinimg.com/originals/a0/a5/da/a0a5da10c01904cd5298f26755110bf0.jpg"
              alt=""
              style={{ height: "250px", width: "200px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>
        </div>
        <h1
          style={{
            color: "orangered",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          Customer What Say
        </h1>
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style={{ height: "300px", width: "250px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Fashion is an Trend</h3>
              <button>more</button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?cs=srgb&dl=pexels-spencer-selover-428338.jpg&fm=jpg"
              alt=""
              style={{ height: "300px", width: "250px" }}
            />
            <div className="card-body">
              <h3 className="card-title">See More</h3>
              <button>more</button>
            </div>
          </div>
        </div>

        <h1
          style={{
            color: "orangered",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          About Us
        </h1>
        <br />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://images.livemint.com/rf/Image-920x613/LiveMint/Period1/2015/05/29/Photos/Trends-U210684012534XLH--621x414@LiveMint.jpg"
              alt=""
              style={{ height: "450px", width: "600px" }}
            />
            <div className="card-body">
              <h3 className="card-title">Research Customer Need</h3>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
              alt=""
              style={{ height: "450px", width: "600px" }}
            />
            <div className="card-body">
              <h3 className="card-title">After Research Build Product</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h5>All Rights reserved @ LOGOIPSUM</h5>
      </div>
    </div>
  );
};

export default Fashion;
