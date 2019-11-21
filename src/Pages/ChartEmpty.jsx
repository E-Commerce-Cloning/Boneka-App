import React, { Fragment } from "react";
import Navbar from "../components/NavbarAfterLogin/Navbar";
import Chart from "../components/cart/cartEmpty/cartEmpty";

const ChartEmpty = () => {
  return (
    <Fragment>
      <Navbar />
      <Chart />
    </Fragment>
  );
};

export default ChartEmpty;
