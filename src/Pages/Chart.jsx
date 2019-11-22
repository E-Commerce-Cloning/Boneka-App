import React, { Fragment } from "react";
import Navbar from "../Components/NavbarAfterLogin/Navbar";
import Menus from "../Components/Menu/Menu";
import Keranjang from "../Components/Keranjang/Keranjang";

const Chart = () => {
  return (
    <Fragment>
      <Navbar />
      <Menus />
      <Keranjang />
    </Fragment>
  );
};

export default Chart;
