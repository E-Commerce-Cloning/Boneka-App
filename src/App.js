import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/CarouselIklan";
import CardCarousel from "./components/Card/Card";
import Navbar from "./components/NavbarAfterLogin/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <CardCarousel />
    </Fragment>
  );
}
export default App;
