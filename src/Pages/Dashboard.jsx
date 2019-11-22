import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menus from "../Components/Menu/Menu";
import Navbar from "../Components/Navbar/Navbar";
import CategoryIcon from "../Components/CategoryIcon/CategoryIcon";
import Carousel from "../Components/Carousel/CarouselIklan";
import BestOffer from "../Components/Best Offer/BestOffer";
import NewArrival from "../Components/New Arrival/NewArrival";
import Printer from "../Components/Printer/printer";
import ImageIklan from "../Components/ImageIklan/ImageIklan";
// import ImageBS from "../Components/ImageBS/ImageBS";
import Featured from "../Components/Featured Brand/feature";
import Maintenance from "../Components/Maintenance/Maintenance";
import ImagePrint from "../Components/ImagePrinter/ImagePrinter";
import Footer from "../Components/Footer/Footer";

const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <Menus />
      <Carousel />
      <CategoryIcon />
      <NewArrival />
      <ImageIklan />
      <BestOffer />
      {/* <ImageBS /> */}
      <Printer />
      <Maintenance />
      <Featured />
      <ImagePrint />
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
