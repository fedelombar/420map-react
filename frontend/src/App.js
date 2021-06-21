import { useState, useEffect } from "react";
import "./app.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import axios from "axios";

function App() {
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 40,
    longitude: -93,
    zoom: 4,
  });

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/frederickmongo/ckq7251ye90sj17s25qbcle3a"
      >
        {pins.map((p) => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <Room
                style={{ fontSize: viewport.zoom * 7, color: "slateblue" }}
              />
            </Marker>
            {/* <Popup
          latitude={40.7127}
          longitude={-74.0134}
          closeButton={true}
          closeOnClick={false}
          anchor="left"
        >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Memorial Center</h4>
            <label>Review</label>
            <p className="desc">Beautiful Place. I like it.</p>
            <label>Rating12</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>

            <label>Information</label>
            <span className="username">
              Created by <b>safak</b>
            </span>
            <span className="date"> 1 hour ago</span>
          </div>
        </Popup> */}
          </>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
