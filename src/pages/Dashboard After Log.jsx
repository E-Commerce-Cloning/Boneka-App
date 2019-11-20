import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../components/Carousel/CarouselIklan";
import BestOffer from "../components/Best Offer/BestOffer";
import NewArrival from "../components/New Arrival/NewArrival";
import Navbar from "../components/NavbarAfterLogin/Navbar";
//import CartEmpty from "../components/cart/cartEmpty/cartEmpty";
//import CartEmpty from "../components/cart/cartEmpty/cartEmpty";
import Printer from "../components/Printer/printer";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <NewArrival />
      <BestOffer />
      <Printer />
      {/* <CartEmpty /> */}
    </Fragment>
  );
};

export default Dashboard;
