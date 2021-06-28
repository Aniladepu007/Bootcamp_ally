import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PDP = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  //   const { id } = props.match.params;

  const url = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`;

  // const res ={"id":"1","name":"Men Navy Blue Solid Sweatshirt","preview":"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg","photos":["https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"],"description":"Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem","size":[1,1,0,1,0],"isAccessory":false,"brand":"United Colors of Benetton","price":2599}

  useEffect(() => {
    axios(url)
      .then((res) => setProduct(res.data))
      .catch((err) => alert(err));
  }, []);

  console.log(product);
  return (
    <>
      <section id="product">
        <div className="left-column">
          <img id="productImg" src={product.preview} alt="" />
        </div>
        <div className="right-column">
          <div className="product-description">
            <h1 id="name">{product.name}</h1>
            <h4 id="brand">{product.brand}</h4>
            <h3>
              Price: Rs <span id="price">{product.price}</span>
            </h3>
            <div className="description">
              <h3>Description</h3>
              <p id="description">{product.description}</p>
            </div>
            <div className="product-preview">
              <h3>Product Preview</h3>
              <div className="previewImg">
                {/* {product.photos.map(
                  (img, i) => {
                    <>
                      <img src={img} />
                    </>;
                  }
                  // if (i == 0) {
                  // imgTag.classList.add("active");
                  // } else {
                  // imgTag.classList.add("non-active");
                  //
                )} */}
              </div>
            </div>
            <div className="btn">
              <button id="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="row m-2">
        <div className="col-6 p-4">
          <img src={preview} style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-4">
          <h1>{productId}</h1>
          <h2>{name}</h2>
          <h3>{brand}</h3>
        </div>
      </div> */}
    </>
  );
};

export default PDP;
