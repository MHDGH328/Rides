import { Row, Col, Image } from "antd";
import { FC } from "react";

const Rides: FC<{
  id: string;
  origin_station_code: number;
  station_path: number[];
  City: any;
  date: any;
  dis: any;
  state: string;
}> = (props) => {
  return (
    <Row className="rides">
      <Col xs={24} sm={24} md={8} lg={6} className="images">
        <Image
          src="/assets/image1.png"
          alt=""
          style={{ objectFit: "contain" }}
          height={149}
          preview={false}
          width={"100%"}
        ></Image>
      </Col>
      <Col xs={24} sm={24} md={15} lg={17} className="rides-content">
        <Row>
          <Col span={16}>
            <p> Ride Id : {props.id} </p>
            <p>Origin Station : {[props.origin_station_code]}</p>
            <p>station_path: {"[" + props.station_path + "]"}</p>

            <p>
              Date:
              {props.date.toLocaleString("en-us", { day: "numeric" }) + "  "}
              {props.date.toLocaleString("en-us", { month: "long" }) + "  "}
              {props.date.toLocaleString("en-us", { year: "numeric" }) + "  "}
              {`${props.date.toLocaleTimeString("en-US", {})}`}
            </p>
            <p>Distance:{props.dis}</p>
          </Col>
          <Col span={8}>
            <Row
              justify="end"
              style={{ gap: 15, width: "100%", flexWrap: "nowrap" }}
            >
              <div className="city">
                <p style={{ marginBottom: 0 }}>{props.City}</p>
              </div>
              <div className="city">
                <p style={{ marginBottom: 0 }}>{props.state}</p>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Rides;
