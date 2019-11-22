import React from "react";
import { Navbar, Nav, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/img/Boneka.png";
import iconMenu from "../../Assets/img/menu-button.svg";
import searchButton from "../../Assets/img/search2.svg";
import shoppingCart from "../../Assets/img/shopping-cart.svg";

const NavDB = () => {
  return (
    <>
      <Navbar className="navbar">
        {/* button kategori */}
        <Button className="btnkategori">
          <img
            width="15"
            height="18"
            style={{ marginBottom: "5px" }}
            src={iconMenu}
            alt=""
          />
          &nbsp; KATEGORI
        </Button>
        <Nav.Link style={{ paddingLeft: "10px" }} href="/">
          <img className="img" src={logo} alt="" />
        </Nav.Link>
        {/* search */}
        <FormControl
          className="search"
          placeholder="Cari produk asli.."
          aria-describedby="basic-addon1"
        />
        <Button
          style={{
            borderRadius: "3px",
            marginBottom: "15px",
            marginLeft: "-45px",
            background: "white",
            border: "none"
          }}
        >
          <img
            style={{ width: "20px", borderRadius: "3px", border: "none" }}
            src={searchButton}
            alt=""
          />
        </Button>
        {/* button keranjang */}
        <Button
          href="/login"
          style={{
            marginLeft: "25px",
            height: "91px",
            background: "#092c52",
            border: "hidden"
          }}
        >
          <img
            style={{
              width: "20px",
              borderRadius: "3px",
              border: "none",
              marginTop: "15px"
            }}
            src={shoppingCart}
            alt=""
          />
          <p style={{ fontSize: "12px", paddingTop: "10px" }}>Keranjang</p>
        </Button>

        <Nav.Link
          href="/login"
          style={{
            marginLeft: "6px",
            height: "91px",
            background: "#092c52",
            border: "hidden",
            color: "white"
          }}
        >
          <p style={{ marginTop: "25px", fontSize: "15px" }}>LOGIN</p>
        </Nav.Link>
        <Link to={`/register`}>
          <Button
            style={{ marginLeft: "12px", marginBottom: "8px" }}
            variant="warning"
          >
            DAFTAR
          </Button>
        </Link>
      </Navbar>
      <div style={{ height: "91px" }}></div>
      <div className="garis"></div>
    </>
  );
};
export default NavDB;
