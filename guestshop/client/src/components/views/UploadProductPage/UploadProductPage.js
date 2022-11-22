import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";
const { TextArea } = Input;

const Continents = [
  { key: 1, value: "서울시 마포구   " },
  { key: 2, value: "서울시 중구" },
  { key: 3, value: "서울시 용산구" },
  { key: 4, value: "서울시 종로구" },
  { key: 5, value: "서울시 강남구" },
  { key: 6, value: "서울시 송파구" },
  { key: 7, value: "서울시 성동구" },
];

function UploadProductPage(props) {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Continent, setContinent] = useState(1);
  const [Images, setImages] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.currentTarget.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.currentTarget.value);
  };
  const continentChangeHandler = (event) => {
    setContinent(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Title || !Description || !Price || !Continent || Images.length === 0) {
      return alert(" 모든 값을 넣어주셔야 합니다.");
    }

    //서버에 채워 넣은 값들을 request로보낸다.
    const body = {
      //로그인된 사람의 id
      writer: props.user.userData._id,
      title: Title,
      Description: Description,
      price: Price,
      images: Images,
      continents: Continent,
    };
    Axios.post("/api/product", body).then((response) => {
      if (response.data.success) {
        alert("상품 업로드에 성공 했습니다.");
        props.history.push("/");
      } else {
        alert("상품 업로드에 실패 했습니다.");
      }
    });
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 level={2}>게스트하우스 업로드</h2>
      </div>
      <Form onSubmit={submitHandler}>
        {/*드롭존*/}

        <FileUpload refreshFunction={updateImages} />
        <a>사진 클릭시 삭제</a>
        <br />
        <br />
        <label> 이름</label>
        <Input onChange={titleChangeHandler} value={Title} />

        <br />
        <br />
        <label>설명 </label>
        <TextArea onChange={descriptionChangeHandler} value={Description} />
        <br />
        <br />
        <label> 가격 (원)</label>
        <Input type="number" onChange={priceChangeHandler} value={Price} />

        <br />
        <br />
        <select onChange={continentChangeHandler} value={Continent}>
          {Continents.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button onClick={submitHandler}>확인</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
