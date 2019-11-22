import React, { Component } from "react";

import {
  Button,
  Card,
  Form,
  Col,
  Row,
  Container,
  Navbar
} from "react-bootstrap";
import account from "../../Assets/img/acc.png";
import "./Register.css";
import "react-datepicker/dist/react-datepicker.css";
// import moment from 'moment';
// import DatePicker from "react-datepicker";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      hidden1: true,
      password: "",
      color: "",
      colorc: "",
      confpassword: "",
      startDate: new Date()
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    // this.handleSubmit =this.handleSubmit.bind(this)
    this.handleDate = this.handleDate.bind(this);
    this.handlePasswordChangeConf = this.handlePasswordChangeConf.bind(this);
    this.toggleShow1 = this.toggleShow1.bind(this);
  }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   let startDate = this.state.startDate
  // }
  handleDate = date => {
    this.setState({
      startDate: date
    });
  };
  myfunction(e) {
    console.log("click me");
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handlePasswordChangeConf(e) {
    this.setState({ confpassword: e.target.value });
  }
  toggleShow1() {
    this.setState({ hidden1: !this.state.hidden1 });
    this.setState({ colorc: "red" });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
    this.setState({ color: "red" });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
    if (this.props.confpassword) {
      this.setState({ confpassword: this.props.password });
    }
  }

  render() {
    return (
      <div>
        <div className="navlog">
          <a href="/">
            <img
              clasName="logo1"
              style={{ width: "34px", marginLeft: "80px", marginTop: "27px" }}
              src="logo.png"
              alt="my logo"
            />
          </a>
        </div>

        <h1 className="sign1"> Registrasi Akun </h1>
        <Container className="container1">
          <p className="account2">
            Sudah Memiliki Akun Boneka ?
            <Link to={"/login"}>
              <a className="daftar2" href="url">
                Sign In
              </a>
            </Link>
          </p>
          <Row>
            <Col></Col>
            <Col xs={5}>
              <Card className="Cardregis">
                <Card.Header className="footerCard">
                  <div className="pic">
                    <img className="picture" src={account} alt="acount" />
                  </div>
                </Card.Header>
                <Card.Body className="bodycard">
                  <Form>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        as="select"
                        style={{ width: "108%", marginLeft: "-11px" }}
                      >
                        <option>Pria</option>
                        <option>Wanita</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                      <Form.Label>Nama Depan</Form.Label>
                      <Form.Control
                        className="control"
                        type="form"
                        placeholder="Masukkan Nama Depan"
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                      <Form.Label>Nama Belakang</Form.Label>
                      <Form.Control
                        className="control"
                        type="form"
                        placeholder="Masukkan Nama Belakang"
                      />

                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    {/* <form onSubmit ={this.handleSubmit}>
                      <div Classname="form-group">
                        <label>Select Date</label>
                      <DatePicker
                      
                        style={{ background: "white" }}
                        selected={this.state.StartDate}
                        onChange={this.handleDate}
                        name ="startDate"
                        dateFormat="MM/DD/YYYY"
                      />
                      </div>
                      
                    </form> */}
                    <Form.Group controlId="formBasic">
                      <Form.Label>Tanggal Lahir </Form.Label>
                      <Form.Control
                        className="control"
                        placeholder="Tanggal lahir"
                        type="date"
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <PhoneInput
                      className="phoneinput"
                      type="form"
                      onChange={value => this.setState({ value })}
                    />
                    <Form.Group controlId="formBasic">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        className="control"
                        type="form"
                        placeholder="Masukkan  Email"
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                      <Form.Label>Password</Form.Label>

                      <Form.Control
                        style={{ background: "white", borderRadius: "4px" }}
                        type={this.state.hidden ? "password" : "text"}
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                      />
                      <icon
                        className="fa fa-eye "
                        style={{
                          marginBottom: "-100px",
                          color: this.state.color
                        }}
                        onClick={this.toggleShow}
                      />
                      <p className="min">minimum 6 karakter alfanumerik</p>

                      {/* <div> */}
                      {/* <button onClick={this.toggleShow}>Show / Hide</button> */}
                      {/* <a href="url">Lupa Password ?</a>
                      </div> */}

                      {/* label="Check me out" */}
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                      <Form.Label>Konfirmasi Password</Form.Label>

                      <Form.Control
                        style={{ background: "white", borderRadius: "4px" }}
                        type={this.state.hidden1 ? "password" : "text"}
                        placeholder="Konfirmasi Password"
                        value={this.state.confpassword}
                        onChange={this.handlePasswordChangeConf}
                      />
                      <icon
                        className="fa fa-eye "
                        style={{
                          marginBottom: "-100px",
                          color: this.state.colorc
                        }}
                        onClick={this.toggleShow1}
                      />
                    </Form.Group>
                    <Button className="Submit" variant="primary" type="submit">
                      REGISTRASI
                    </Button>
                    {/* <p className="or " style={{ marginLeft: "100px" }} />
                    -OR- */}
                    {/* <GoogleLoginButton
                      text="SIGN IN WITH GOOGLE"
                      className=" google "
                      onClick={() => alert("Hello")}
                    />
                    <p> </p>
                    <FacebookLoginButton
                      text="SIGN IN WITH FACEBOOK"
                      className="fb"
                      onClick={() => alert("Hello")}
                    /> */}
                    <br></br>
                  </Form>
                </Card.Body>
              </Card>
              <p className="registrasi">
                Dengan Mengeklik tombol "REGISTRASI AKUN" anda setuju <br />
                dengan
                <a className="daftar" href="url">
                  Termin Pelayanan
                </a>
                <span> dan </span>
                <a className="termin" href="url">
                  Kebijakan Privasi
                </a>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Register;
