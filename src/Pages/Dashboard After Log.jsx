import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menus from "../Components/Menu/Menu";
import Carousel from "../Components/Carousel/CarouselIklan";
import BestOffer from "../Components/Best Offer/BestOffer";
import NewArrival from "../Components/New Arrival/NewArrival";
import Navbar from "../Components/NavbarAfterLogin/Navbar";
import Printer from "../Components/Printer/printer";
import Maintenance from "../Components/Maintenance/Maintenance";
import Featured from "../Components/Featured Brand/feature";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <Menus />
      <Carousel />
      <NewArrival />
      <BestOffer />
      <Printer />
      <Maintenance />
      <Featured />
    </Fragment>
  );
};

export default Dashboard;
