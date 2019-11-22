import React from "react";
import { Link } from "react-router-dom";
import "./CategoryIcon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const CategoryIcon = () => {
  return (
    <Container style={{ paddingTop: "5px", marginLeft: "90px" }}>
      <div className="container category-icon">
        <div className="row row-icon">
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/8fe09e-ic-digital-48@2x.png"
                alt="Digital Product"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Digital Product
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/f622ba-ic-computer-48@2x.png"
                alt="Komputer"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Komputer
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/dd6e81-ic-automotive-48@2x.png"
                alt="Otomotif"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Otomotif
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/3a63c6-ic-software-48@2x.png"
                alt="Software"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Software
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/8c8b89-ic-printer-48@2x.png"
                alt="Printer"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Printer
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/c130ef-ic-gadget-48@2x.png"
                alt="Gadget"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                {" "}
                Gadget
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/f92f4a-ic-server-48@2x.png"
                alt="Server"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Server
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori/`}>
              <img
                src="https://static.bmdstatic.com/st/home/c6c657-ic-electronics-48@2x.png"
                alt="Elektronik"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Elektronik
              </h5>
            </Link>
          </div>
          <div className="col col-md-1 menu-category-icon">
            <Link to={`/kategori`}>
              <img
                src="https://static.bmdstatic.com/st/home/c10421-ic-camera-48@2x.png"
                alt="Kamera"
              ></img>
              <h5
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontWeight: "0",
                  marginTop: "10px",
                  marginRight: "10px"
                }}
              >
                Kamera
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default CategoryIcon;
