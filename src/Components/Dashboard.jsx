import React, { Component } from "react";
import { Col, Row, Container, ListGroup, Card } from "react-bootstrap";
import account1 from "../assets/img/acc.png";
import "./Dashboard.css";
import { Link, Switch } from "react-router-dom";
import NavDB from './Navbar'

class Dashboard extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        
        <NavDB/>
        <div className="Container ">
          <div className="col-lg-12 bt-page-title text-center">
            <h1 className="bt-typo-displaylarge">Dashboard</h1>
            <p className="bt-typo-body">
              Akses cepat ke semua hal tentang akun Anda
            </p>
          </div>
        </div>
        <hr />
        <Container>
          <Row>
            <Col>
              <Card className="Card1">
                <Card.Header className="footerCard1">
                  <div className="pic1">
                    <img className="picture1" src={account1} alt = "account1" />
                    <p>Nama Account </p>
                    <p class="list-group-item-text">
                      Bukan akun Anda?{" "}
                      <a className="logout" href="/logout">
                        Keluar
                      </a>
                    </p>
                  </div>
                </Card.Header>

                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Switch>
                      <Link to={"/dashboard"}>Dashboard </Link>
                    </Switch>
                  </ListGroup.Item>
                  <ListGroup.Item>Order </ListGroup.Item>
                  <ListGroup.Item>
                    <Switch>
                      <Link to={"/profile"}>Profile </Link>
                    </Switch>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a className="dash" href="#!">
                      Akun dan Kata Sandi
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a className="dash" href="#!">
                      Alamat pengiriman
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="bt-typo-displaysmall bt-form-heading">
                      Akses 
                    </h3>
                    <div className="list-group">
                      <a className="list-group-item" href="/profile">
                        Ubah Data Profil
                      </a>
                      <a className="list-group-item" href="/member/address">
                        Alamat Pengiriman
                      </a>
                      <a className="list-group-item "  href="/member/account">
                        Ubah Kata Sandi
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6" style ={{left : "200px"}}>
                    <h3 className="bt-typo-displaysmall bt-form-heading">
                      Pemesanan
                    </h3>
                    <div className="list-group">
                      <div className="list-group-item" >
                        Pemesanan Menunggu Pembayaran{" "}
                        <span id="unpaidCount" className="badge --badge-error">
                          0
                        </span>
                      </div>
                      <a className="list-group-item" href>
                        Pemesanan Menunggu Review{" "}
                        <span
                          id="unreviewedCount"
                          className="badge --badge-warning"
                        >
                          3
                        </span>
                      </a>{" "}
                     
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="bt-typo-displaysmall bt-form-heading">
                      Bantuan dan Kontak
                    </h3>
                    <div className="list-group">
                      <a className="list-group-item" href="tel:+622129292828">
                        Telpon: 021 2929 2828
                      </a>
                      <a className="list-group-item" href="sms:+628121238000">
                        SMS: 0812 123 8000
                      </a>
                      <a className="list-group-item" href="tel:+62214257787">
                        Fax: 021 425 7787
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="line" style={{ width: "530px" }} />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            {/* <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Dashboard;
