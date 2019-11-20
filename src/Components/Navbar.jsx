import React from "react";
import { Navbar, Nav, Button, FormControl, Dropdown } from "react-bootstrap";
import "./Navbar.css";
import logo from "../assets/img/Boneka.png";
import iconMenu from "../assets/img/menu-button.svg";
import searchButton from "../assets/img/search2.svg";
import shoppingCart from "../assets/img/shopping-cart.svg";

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
          style = {{background:'white'}}
        />
        <Button className="search-logo" variant="outline-light"
          style={{
            borderRadius: "3px",
            marginBottom: "15px",
            marginLeft: "-45px",
            // backgroundColor: "white",
            boxShadow: '0',
       
          }}
        >
          <img className = "imgsearch"
            style={{ width: "20px",
             borderRadius: "3px",
             border: "none",
             boxShadow: '0',
            //  backgroundColor:"none"
            }}
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
            <b style={{ marginLeft: "3px",  }}>0</b>
          </span>
          <p style={{ fontSize: "9px", Top: "6px" }}>Keranjang</p>
        </Button>

        <Dropdown
          href="#"
          style={{
            marginLeft: "6px",
            height: "91px",
            background: "#092c52",
            border: "hidden",
            color: "white"
          }}
        >
          <Dropdown.Toggle
            className="dropdown"
            style={{ marginTop: "10px", fontSize: "11px" }}
          >
            Halo,
            <br />
            Hasnawi
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Akun Saya</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Riwayat Transaksi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Keluar</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      <div className="garis"></div>
      
    </>
  );
};
export default NavDB;