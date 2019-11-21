import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menus from "../Components/Menu/Menu";
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/CarouselIklan";
import BestOffer from "../Components/Best Offer/BestOffer";
import NewArrival from "../Components/New Arrival/NewArrival";
import Printer from "../Components/Printer/printer";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <Menus />
      <Carousel />
      <NewArrival />
      <BestOffer />
      <Printer />
    </Fragment>
  );
};

export default Dashboard;
