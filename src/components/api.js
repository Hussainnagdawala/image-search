import axios from "axios";
import { useEffect, useState } from "react";
function LoadImages() {
  const [state, setSatate] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos?per_page=30&client_id=09Bnn9riakdQw7e3YVoEXwyKSRkVd4oZmu_9ijMH3Lo"
      )
      .then((response) => setSatate(response.data));
  }, []);
  return state;
}

function SearchImages(query) {
  const [state, setSatate] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com//search/photos?query=${query}&orientation=landscape&client_id=09Bnn9riakdQw7e3YVoEXwyKSRkVd4oZmu_9ijMH3Lo`
      )
      .then((data) => setSatate(data.data.results));
  }, [query]);
  return state;
}

function Categorymain() {
  const [state, setSatate] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/collections?client_id=09Bnn9riakdQw7e3YVoEXwyKSRkVd4oZmu_9ijMH3Lo`
      )
      .then((collection) => setSatate(collection.data));
  }, []);
  return state;
}
export { SearchImages, LoadImages, Categorymain };
