import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import account1 from "../Assets/img/acc.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <Card className="Cardmenu">
        <Card.Header className="footerCard1">
          <div className="pic1">
            <img className="picture1" src={account1} alt="account1" />
            <p>Nama Account </p>
            <p class="list-group-item-text">
              Bukan akun Anda?
              <a className="logout" href="/logout">
                Keluar
              </a>
            </p>
          </div>
        </Card.Header>

        <ListGroup variant="flush" className="fl">
          <ListGroup.Item>
            <Link to={"/dashboard"}>Dashboard </Link>
          </ListGroup.Item>
          <ListGroup.Item>Order </ListGroup.Item>
          <ListGroup.Item>
            <Link to={"/profile"}>Profile </Link>
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
    </div>
  );
};

export default Menu;
