import React from "react";
import { Navbar, Nav, Button, FormControl } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../assets/img/Boneka.png";
import iconMenu from "../../assets/img/menu-button.svg";
import searchButton from "../../assets/img/search2.svg";
import shoppingCart from "../../assets/img/shopping-cart.svg";

const NavDB = () => {
  return (
    <>
      <Navbar className="navbar">
        {/* button kategori */}
        <Button className="btnkategori">
          <img
            width="20"
            height="18"
            style={{ marginBottom: "5px" }}
            src={iconMenu}
            alt=""
          />
          &nbsp; KATEGORI
        </Button>
        <Nav.Link href="#">
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
          href="#"
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
          <span className="badge">
            <b style={{ marginLeft: "-3px" }}>0</b>
          </span>
          <p style={{ fontSize: "12px", paddingTop: "10px" }}>Keranjang</p>
        </Button>

        <Nav.Link
          href="#"
          style={{
            marginLeft: "6px",
            height: "91px",
            background: "#092c52",
            border: "hidden",
            color: "white"
          }}
        >
          <p style={{ marginTop: "10px", fontSize: "15px" }}>
            Halo,
            <br />
            Hasnawi
          </p>
        </Nav.Link>
      </Navbar>
      <div className="garis"></div>
      <Navbar className="nav2">
        <Nav.Link
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            marginLeft: "65px",
            fontSize: "13px"
          }}
        >
          Cicilan Tanpa Kartu Kredit
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            paddingLeft: "24px",
            fontSize: "13px"
          }}
        >
          Sahabat Mahasiswa
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            paddingLeft: "24px",
            fontSize: "13px"
          }}
        >
          KJP-KJMU
        </Nav.Link>
        <Nav.Link
          href="#"
          style={{
            textDecoration: "none",
            color: "white",
            paddingLeft: "24px",
            fontSize: "13px"
          }}
        >
          Digital Product
        </Nav.Link>
      </Navbar>
    </>
  );
};
export default NavDB;
