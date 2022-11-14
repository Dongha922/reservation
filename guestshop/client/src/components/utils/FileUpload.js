import React, { useState } from "react";
import DropZone from "react-dropzone";
import axios from "axios";
import { Icon } from "antd";

function FileUpload(props) {
  const [Images, setImages] = useState([]);

  const dropHandler = (files) => {
    let formData = new FormData();

    const config = {
      header: {
        "content-type": "multipart/fomr-data",
      },
    };
    formData.append("file", files[0]);

    axios.post("/api/product/image", formData, config).then((response) => {
      if (response.data.success) {
        //console.log(response.data);

        setImages([...Images, response.data.filePath]);
        props.refreshFunction([...Images, response.data.filePath]);
      } else {
        alert("파일 저장하는데 실패했습니다.");
      }
    });
  };

  const deleteHandler = (image) => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    props.refreshFunction(newImages);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <DropZone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "column",
              marginBottom: 20,
              borderRadius: 10,
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                fontSize: "2rem",
                height: "100%",

                flexDirection: "column",
              }}
            >
              <a>
                <Icon type="file-image" />
              </a>
              <a style={{ fontSize: "1rem" }}>사진 추가하기</a>
            </div>
          </div>
        )}
      </DropZone>

      <div
        style={{
          display: "flex",

          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => deleteHandler(image)} key={index}>
            <img
              style={{
                maxWidth: "330px",
                maxHeight: "220px",
              }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
