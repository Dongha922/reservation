import React, { useEffect, useState } from "react";
import axios from "axios";
import { Icon, Col, Row, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";

function LandingPage() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.post("api/product/products").then((response) => {
      if (response.data.success) {
        //console.log(response.data);

        setProducts(response.data.productInfo);
      } else {
        alert("숙소 정보 가져오는데 실패 ");
      }
    });
  }, []);

  const renderCards = Products.map((product, index) => {
    //console.log("product", product);

    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card cover={<ImageSlider images={product.images} />}>
          <Meta title={product.title} description={`${product.price} `} />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>
          Let's Travel Anywhere <Icon type="rocket" />{" "}
        </h2>
      </div>

      {/* Filter */}
      {/* Search */}
      {/* Cards */}
      <Row gutter={[16, 16]}>{renderCards}</Row>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>더보기</button>
      </div>
    </div>
  );
}

export default LandingPage;
