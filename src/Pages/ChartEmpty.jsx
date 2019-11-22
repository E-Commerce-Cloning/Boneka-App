import React, { Fragment } from "react";
import Navbar from "../Components/NavbarAfterLogin/Navbar";
import Chart from "../Components/cart/cartEmpty/cartEmpty";

const ChartEmpty = () => {
  return (
    <Fragment>
      <Navbar />
      <Chart />
    </Fragment>
  );
};

export default ChartEmpty;
