import React, { useState } from "react";
import { LoadImages, SearchImages, Categorymain } from "./api";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const category123 = Categorymain();
  const navigate = useNavigate()
  console.log(category123);
  const categoryfun = (db) => {
    console.log(db);
    navigate(`/singleCategory/${db}`)
  };
  return (
    <>
      {category123.map((items, index) => {
        return (
          <Button
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
