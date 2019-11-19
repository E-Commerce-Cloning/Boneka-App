import React, { Component } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  Button,
  Card,
  Form,
  Col,
  Row,
  Container,
  Navbar
} from "react-bootstrap";
import "./LoginPage.css";
import account from "../assets/acc.png";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
      color:''
      
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    // this.colorChange=this.colorChange.bind(this)
    
  }
  // colorChange=()=>{
  //   this.setState({background: 'green'})
  // }
  myfunction(e) {
    console.log("click me");
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
    this.setState({color:"green"})
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
    
  }
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <a href="#">
            <img
              clasName="logo1 "
              style={{ width: "34px", marginLeft: "80px" }}
              src="logo.png"
              alt="my image"
              onClick={() => alert("Hello")}
            />
          </a>
        </Navbar>

        <h1 className="sign"> Sign In </h1>
        <Container className="container">
          <Row>
            <Col></Col>
            <Col xs={5}>
              <Card className="Card">
                <Card.Header className="footerCard">
                  <div className="pic">
                    <img className="picture" src={account} />
                  </div>
                </Card.Header>
                <Card.Body className="bodycard" style={{ color: "grey" }}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        style={{ background: "white", borderRadius: "4px" }}
                        type="email"
                        placeholder="Enter email"
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
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
                        style={{ marginBottom: "-100px" , color :this.state.color}}
                        onClick={this.toggleShow} 
                        onChange={this.colorChange}
                        
                        
                      />
                      <div>
                        {/* <button onClick={this.toggleShow}>Show / Hide</button> */}
                        <a href="url">Lupa Password ?</a>
                      </div>

                      {/* label="Check me out" */}
                    </Form.Group>
                    <Button className="Submit" variant="primary" type="submit">
                      Sign In
                    </Button>
                    <p className="or " style={{ marginLeft: "100px" }} />
                    -OR-
                    <GoogleLoginButton
                      text="SIGN IN WITH GOOGLE"
                      className=" google "
                      onClick={() => alert("Hello")}
                    />
                    <p> </p>
                    <FacebookLoginButton
                      text="SIGN IN WITH FACEBOOK"
                      className="fb"
                      onClick={() => alert("Hello")}
                    />
                    <br></br>
                  </Form>
                </Card.Body>
              </Card>
              <p className="account">
                Belum punya account Boneka ?
                <Link to ={'/Register'}>
                <a className="daftar" href="url">
                  Daftar
                </a>
                </Link>
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Login;
