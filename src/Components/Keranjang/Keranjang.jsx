import React, { Component } from "react";
import laptop_img from "../../Assets/img/laptop.jpeg";
// import btn_delete from "./../Assets/img/trash.svg";
import btn_next from "../../Assets/img/right-arrow.svg";
import "./Keranjang.css";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form
} from "react-bootstrap";

class Keranjang extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col style={{ background: "" }} xs={8}>
            <Row>
              <Col xs={9}>
                <h3>Keranjang Belanja</h3>
              </Col>
              <Col style={{ marginTop: "7px", textAlign: "right" }}>
                Total (1) Barang
              </Col>
            </Row>
          </Col>
          <Col style={{ background: "" }} xs={4}></Col>
        </Row>
        <br />
        <Row>
          <Col xs={8}>
            <Card style={{ width: "100%" }}>
              <Card.Header style={{ background: "white" }}>
                <h4>Boneka</h4>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col xs={2}>
                      <img
                        width="100px"
                        style={{
                          border: "1px solid #f5f5f5",
                          borderRadius: "5px"
                        }}
                        src={laptop_img}
                      />
                    </Col>
                    <Col>
                      <h6>
                        ACER Predator Nitro 5 AN515-52 (Core i7-8750H)
                        [UN.Q4ASN.001]
                      </h6>
                      <p>Rp 15.015.000</p>
                      <Button variant="light">-</Button>
                      <input
                        type="number"
                        style={{
                          marginLeft: "10px",
                          width: "40px",
                          height: "40px"
                        }}
                      />
                      <Button variant="warning" style={{ marginLeft: "10px" }}>
                        +
                      </Button>
                    </Col>
                    <Col>
                      <h6 style={{ textAlign: "right" }}>Rp 15.015.000 </h6>
                      <Button
                        style={{ float: "right", marginTop: "30px" }}
                        variant="light"
                      >
                        <img
                          src="https://image.flaticon.com/icons/svg/64/64022.svg"
                          alt=""
                          width="20px"
                        />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <h6>Alamat Pengiriman</h6>
                      <textarea
                        placeholder="ALAMAT PENGIRIMAN"
                        style={{
                          marginTop: "10px",
                          border: "1px solid #DADADA",
                          borderRadius: "3px",
                          height: "35px",
                          width: "100%"
                        }}
                      />
                    </Col>
                    <Col>
                      <h6>Jasa Pengiriman</h6>
                      <select
                        style={{
                          border: "1px solid #DADADA",
                          borderRadius: "3px",
                          height: "40px",
                          width: "100%",
                          background: "#f5f5f5"
                        }}
                      >
                        <option>Pilih Pengiriman</option>
                        <option>JNE</option>
                        <option>TIKI</option>
                      </select>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <p>Pembelian</p>
                      <p>Pengiriman</p>
                      <h6>SUBTOTAL</h6>
                    </Col>
                    <Col style={{ marginTop: "7px", textAlign: "right" }}>
                      <p>Rp 15.015.000</p>
                      <p>Rp 0</p>
                      <h6>Rp 15.015.000</h6>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={4}>
            <Card style={{ width: "100%" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col xs={8} style={{ marginTop: "7px" }}>
                      <Form.Control
                        type="text"
                        placeholder="Kode eCoupon"
                        style={{ width: "100%" }}
                      />
                    </Col>
                    <Col xs={4} style={{ marginTop: "7px" }}>
                      <Button variant="warning" type="submit">
                        SUBMIT
                      </Button>
                    </Col>
                    <Col style={{ marginTop: "20px" }}>
                      <p>Pembelian</p>
                      <p>Pengiriman</p>
                      <h6>SUBTOTAL</h6>
                    </Col>
                    <Col style={{ marginTop: "20px", textAlign: "right" }}>
                      <p>Rp 15.015.000</p>
                      <p>Rp 0</p>
                      <h6>Rp 15.015.000</h6>
                    </Col>
                  </Row>
                  <Button variant="primary" style={{ width: "100%" }}>
                    Lanjut &nbsp;
                    <img src={btn_next} width="15px" />
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Keranjang;
