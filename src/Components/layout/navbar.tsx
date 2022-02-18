import { Row, Col, Image } from "antd";
import { FC } from "react";
const Navbar: FC<{ name: string }> = (props) => {
  return (
    <Row justify="space-between" className="navbar">
      <div className="container">
        <Row justify="space-between" className="content-navbar">
          <Col xs={12} sm={12} md={4} className="logo">
            <p>Edvora</p>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Row className="user">
              <p>{props.name}</p>
              <Image src="/assets/Rectangle.png" alt="" preview={false}></Image>
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Navbar;
