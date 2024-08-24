import React, { useState } from "react";
import { LoadImages, SearchImages, Categorymain } from "./api";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const category123 = Categorymain();
  const navigate = useNavigate();
  const categoryfun = (db) => {
    console.log(db);
    navigate(`/singleCategory/${db}`);
  };
  return (
    <>
      {category123.map((items, index) => {
        return (
          <Button
            key={items.id}
            variant="outline-secondary"
            className="me-3"
            onClick={() => {
              categoryfun(items.id);
            }}
          >
            {items.title}
          </Button>
        );
      })}
    </>
  );
};

export default Category;
