import React, { Component } from "react";
import {
  Col,
  
  Row,
  Container,
  ListGroup,
  Card,
  Form,
  ToggleButton,
  InputGroup
} from "react-bootstrap";
import account1 from "../assets/img/acc.png";
import "./Dashboard.css";
import "./Profil.css";
import { Link, Switch } from "react-router-dom";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import NavDB from "./Navbar";


class Dashboard extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div><NavDB /></div>
        <div className="Container ">
          <div className="col-lg-12 bt-page-title text-center">
            <h1 className="bt-typo-displaylarge">Profil</h1>
            <p className="bt-typo-body">Pengaturan Informasi Pribadi</p>
          </div>
        </div>
        <hr />
        <span></span>
        <Container className = "container1">
        <Row>
            <Col>
              <Card className="Card1">
                <Card.Header className="footerCard1">
                  <div className="pic1">
                    <img className="picture1" src={account1} alt = "account" />
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
              <p className="information">
                Informasi Pembeli{" "}
                <span className="wajib">semua wajib di isi *</span>
                <hr className="line1" />
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                      Jenis Kelamin
                    </Form.Label>
                    <Col sm="10">
                      <ToggleButtonGroup  type="checkbox" className = "toggle" >
                        {/* value={value} onChange={handleChange} */}
                        <ToggleButton  variant="light" value="">Pria</ToggleButton>
                        <ToggleButton  variant="light" value="">Wanita</ToggleButton>
                        
                      </ToggleButtonGroup>
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                      Nama Lengkap
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        className="form "
                        type="form"
                        placeholder="Nama Lengkap"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                      Tanggal Lahir
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        className="form "
                        type="form"
                        placeholder=" Tanggal Lahir"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        className="form "
                        type="email"
                        placeholder="Email"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                      Ponsel
                    </Form.Label>
                    <Col sm="10">
                    <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend" style = {{ marginBottom : "-40px", height: "36px"}}>+62</InputGroup.Text>
            </InputGroup.Prepend>
                      <Form.Control
                        className="form "
                        type="phone"
                        placeholder ="Ponsel" style = {{textAlign:"center"}}
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                    Alamat
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        className="form "
                        type="form"
                        placeholder="Alamat"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                     Provinsi
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        className="form "
                        type="form"
                        placeholder="Provinsi"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                     Kota
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        className="form "
                        type="form"
                        placeholder="Kota"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                <Form>
                  <Form.Group as={Row} controlId="Name">
                    <Form.Label className="formlabel" column sm="2">
                      Kecamatan
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        className="form "
                        type="form"
                        placeholder="Kecamatan"
                      />
                    </Col>
                  </Form.Group>
                </Form>
                {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}
              </p>
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
