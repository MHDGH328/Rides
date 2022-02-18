import { Button, Dropdown, Menu, Row, Select, Tabs } from "antd";
import { FC, useEffect, useState } from "react";
import { AlignLeftOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
import Rides from "./Rides";
const Tab: FC<{ rids: any[]; city: any[]; state: any[]; FilterRides: any }> = (
  props
) => {
  const [City, setCity] = useState<string>("All City");
  const [State, setState] = useState<string>("All State");

  let upComingRide: any[] = [];
  let pastRide: any[] = [];

  const { Option } = Select;

  function handleChangeCity(value: any) {
    setCity(value);
  }
  function handleChangeState(value: any) {
    setState(value);
  }

  props.rids.map((ele: any) => {
    if (new Date(ele.info.date).getTime() > new Date().getTime()) {
      upComingRide.push(ele);
    }
    if (new Date(ele.info.date).getTime() < new Date().getTime()) {
      pastRide.push(ele);
    }
  });

  useEffect(() => {
    props.FilterRides(State, City);
  }, [City, State, props]);

  const menu = (
    <Menu>
      <Row>
        <p
          style={{
            fontSize: 17,
            width: "100%",
            textAlign: "left",
            color: "#A5A5A5",
            borderBottom: "1px solid ",
            lineHeight: 2,
          }}
        >
          Filters
        </p>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Select
          defaultValue="All State"
          style={{ width: 120 }}
          onChange={handleChangeState}
        >
          <Option value="All State">All State</Option>
          {props.state.map((ele) => {
            return (
              <Option value={ele} key={ele}>
                {ele}
              </Option>
            );
          })}
        </Select>
      </Row>
      <Row>
        <Select
          defaultValue="All City"
          style={{ width: 120 }}
          onChange={handleChangeCity}
        >
          <Option value="All City">All City</Option>
          {props.city.map((ele) => {
            return (
              <Option value={ele} key={Math.random()}>
                {ele}
              </Option>
            );
          })}
        </Select>
      </Row>
    </Menu>
  );

  return (
    <div className="content">
      <div className="container ">
        <Row className="filters">
          <Dropdown overlay={menu} placement="bottomRight">
            <Row style={{ alignItems: "center", gap: 5 }}>
              <p style={{ marginBottom: 0 }}>Filters</p>
              <AlignLeftOutlined></AlignLeftOutlined>
            </Row>
          </Dropdown>
        </Row>
        <Tabs defaultActiveKey="1" className="content-tabes">
          <TabPane tab="Nearest rides" key="1">
            {props.rids.map((ele: any) => {
              return (
                <Rides
                  id={ele.info.id}
                  origin_station_code={ele.info.origin_station_code}
                  station_path={ele.info.station_path}
                  date={new Date(ele.info.date)}
                  dis={ele.dis}
                  City={ele.info.City}
                  state={ele.info.state}
                  key={ele.info.id}
                />
              );
            })}
          </TabPane>
          <TabPane tab={`Upcoming rides (${upComingRide.length})`} key="2">
            {props.rids.map((ele: any) => {
              if (new Date(ele.info.date).getTime() > new Date().getTime()) {
                return (
                  <Rides
                    id={ele.info.id}
                    origin_station_code={ele.info.origin_station_code}
                    station_path={ele.info.station_path}
                    date={new Date(ele.info.date)}
                    dis={ele.dis}
                    state={ele.info.state}
                    City={ele.info.City}
                    key={ele.info.id}
                  />
                );
              }
            })}
          </TabPane>
          <TabPane tab={`Past rides(${pastRide.length})`} key="3">
            {props.rids.map((ele: any) => {
              if (new Date(ele.info.date).getTime() < new Date().getTime()) {
                return (
                  <Rides
                    id={ele.info.id}
                    origin_station_code={ele.info.origin_station_code}
                    station_path={ele.info.station_path}
                    date={new Date(ele.info.date)}
                    dis={ele.dis}
                    state={ele.info.state}
                    City={ele.info.City}
                    key={ele.info.id}
                  />
                );
              }
            })}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Tab;
