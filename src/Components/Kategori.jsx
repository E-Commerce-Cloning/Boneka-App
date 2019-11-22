import React, { Component, Fragment } from "react";
import { useSelector } from "react-redux";
// import laptop_img from "../Assets/img/laptop.jpeg";
// import btn_delete from "./../Assets/img/trash.svg";
// import btn_next from "./../Assets/img/next.svg";
import "./Keranjang/Keranjang.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  ListGroup,
  Button,
  CardColumns,
  Form
} from "react-bootstrap";
const Kategori = () => {
  const produk = useSelector(state => state.produk.produkList);

  //printer
  const produkPrint = [];
  produk.map((state, index) => {
    if (state.nama_kategori === "Office and Store Supplies") {
      // console.log(state);
      produkPrint.push(state);
    }
  });

  return (
    <Fragment>
      <div style={{ marginLeft: "90px", marginTop: "30px" }}>
        <h4>Kategori</h4>
      </div>
      <Container>
        <CardColumns>
          <Card>
            <Card.Img
              variant="top"
              src="https://static.bmdstatic.com/pk/product/medium/KAPPA-Box-Motor-K30NS--SKU00217286-2017112145332.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
              <h5 className="text-muted">Rp 150.000</h5>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://static.bmdstatic.com/pk/product/medium/KAPPA-Box-Motor-K30NS--SKU00217286-2017112145332.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
              <h5 className="text-muted">Rp 150.000</h5>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://static.bmdstatic.com/pk/product/medium/KAPPA-Box-Motor-K30NS--SKU00217286-2017112145332.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
              <h5 className="text-muted">Rp 150.000</h5>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://static.bmdstatic.com/pk/product/medium/KAPPA-Box-Motor-K30NS--SKU00217286-2017112145332.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
              <h5 className="text-muted">Rp 150.000</h5>
              {/* <small className="text-muted">Rp 150.000</small> */}
            </Card.Footer>
          </Card>{" "}
          <Card>
            <Card.Img
              variant="top"
              src="https://static.bmdstatic.com/pk/product/medium/KAPPA-Box-Motor-K30NS--SKU00217286-2017112145332.jpg"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer>
              <h5 className="text-muted">Rp 150.000</h5>
              {/* <small className="text-muted">Rp 150.000</small> */}
            </Card.Footer>
          </Card>
        </CardColumns>
      </Container>
    </Fragment>
  );
};

export default Kategori;
