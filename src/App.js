import logo from "./logo.svg";
import { LoadImages, SearchImages, Categorymain } from "./components/api";
import "./App.css";
import Col from "react-bootstrap/Col";
import cover from "./images/cover.png"
import Category from "./components/Category";
import Row from "react-bootstrap/Row";
import Navbardb from "./components/Navbardb";
import Image from "./components/Image";
import BackgroundSlider from "react-background-slider";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

function App() {
  const data = LoadImages();
  // console.log(data);
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState([]);
  const [toggle, setToggle] = useState("true");
  const searchdata = SearchImages(query);
  // console.log(query);
  let backgdata = data.map((items) => items.urls.raw);
  console.log(backgdata);
  const searchQuery = () => {
    if (query.length <= 0) {
      setToggle("true");
    } else {
      setSearch(searchdata);
      setToggle("false");
    }
  };
  return (
    <div className="App">
      <div className="container text-center">
        <Category />
        <div className = "inputbox" >
          <input
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            className = "homeinput"
            placeholder="Search Images"
          />
          <div className=""></div>
          <button onClick={searchQuery} className="btn me-3 homesearchbtn">search</button>
        </div>
        {/* <BackgroundSlider
          images={[
            cover
          ]}
          duration={10}
          transition={2}
        /> */}
        <div>
          {toggle == "false" ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                {search.map((image, i) => (
                  <img
                    key={i}
                    src={image.urls.small}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                {data.map((image, i) => (
                  <img
                    key={i}
                    src={image.urls.small}
                    style={{ width: "100%", display: "block" }}
                    alt=""
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
