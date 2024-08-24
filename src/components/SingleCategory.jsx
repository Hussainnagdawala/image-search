import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const mydata = useParams();
  console.log(mydata.data);
  const [finalData, setFinalData] = useState([]);
  // let main = ""
  useEffect(() => {
    const getCategoryData = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/collections/${mydata.data}/photos?cfafaslient_id=09Bnn9riakdQw7e3YVoEXwyKSRkVd4oZmu_9ijMH3Lo`
        );
        const data = await response.data;
        setFinalData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryData();
  }, []);
  return <div></div>;
};

export default SingleCategory;
