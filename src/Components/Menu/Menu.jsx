import React from "react";
import { Nav } from "react-bootstrap";
import "./Menu.css";

const Menus = () => {
  return (
    <div className="menu">
      <table>
        <tr>
          <td>
            <Nav.Link
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "50px",
                fontSize: "14px"
              }}
            >
              Cicilan Tanpa Kartu Kredit
            </Nav.Link>
          </td>
          <td>
            <Nav.Link
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "14px"
              }}
            >
              Sahabat Mahasiswa
            </Nav.Link>
          </td>
          <td>
            <Nav.Link
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "14px"
              }}
            >
              KJP-KJMU
            </Nav.Link>
          </td>
          <td>
            <Nav.Link
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "14px"
              }}
            >
              Digital Product
            </Nav.Link>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Menus;
