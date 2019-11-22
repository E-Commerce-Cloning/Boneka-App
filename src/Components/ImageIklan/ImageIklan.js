import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageIklan.css";
import { Container } from "react-bootstrap";

const ImageIklan = () => {
  return (
    <Container style={{ marginTop: "100px", marginLeft: "140px" }}>
      <div className="container image-iklan">
        <div className="row row-image">
          <div className="col col-md-4 image-iklan">
            <a
              href="https://www.bhinneka.com/promo/gadget-dan-aksesori?utm_source=direct&amp;utm_medium=homepage&amp;utm_campaign=191107_n_potongan-langsung-hingga-1-juta&amp;utm_content=contentblock_3_1"
              target="_self"
            >
              <img
                src="https://static.bmdstatic.com/st/home/44b9a2-sb1 duluan.jpg"
                alt="Potongan Langsung 1 Juta"
              ></img>
            </a>
          </div>
          <div className="col col-md-4 image-iklan">
            <a
              href="https://www.bhinneka.com/promo/blue-air?utm_source=direct&amp;utm_medium=homepage&amp;utm_campaign=191115_n_life-better-with-air-purifier&amp;utm_content=contentblock_3_2"
              target="_self"
            >
              <img
                src="https://static.bmdstatic.com/st/home/2a249e-SB 2 (18-24 Nov).jpg"
                alt="Air Purifier"
              ></img>
            </a>
          </div>
          <div className="col col-md-4 image-iklan">
            <a
              href="https://www.bhinneka.com/toko-duta-abadi-primantara?utm_source=direct&amp;utm_medium=homepage&amp;utm_campaign=191115_n_buat-minpi-lebih-indah&amp;utm_content=contentblock_3_3"
              target="_self"
            >
              <img
                src="https://static.bmdstatic.com/st/home/69d252-small-banner3.jpg"
                alt="Hot Deals"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageIklan;
