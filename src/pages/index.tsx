import type { NextPage } from "next";
import Tabs from "../Components/Content/Tabs";
import { useEffect, useState } from "react";
import { Ride, user, sorted_rides, City, State } from "../../rides";

const Home: NextPage = () => {
  const [Sorted_Rides, Set_Sorted_Rides] = useState<any[]>([]);

  let FilterRides = (state: string, city: string) => {
    if (city === "All City" && state === "All State") {
      let sorted = sorted_rides();
      Set_Sorted_Rides(sorted);
    } else if (city !== "All City" && state === "All State") {
      let sorted = sorted_rides();
      let sorted_city = sorted.filter((ele) => ele.info.City === city);

      Set_Sorted_Rides(sorted_city);
    } else if (city === "All City" && state !== "All State") {
      console.log("Mohammed", state);

      let sorted = sorted_rides();
      console.log(sorted);
      let sorted_state = sorted.filter((ele) => ele.info.state === state);
      console.log("Mohammed", sorted_state);
      Set_Sorted_Rides(sorted_state);
    } else if (city !== "All City" && state !== "All State") {
      let sorted = sorted_rides();
      let sorteds = sorted.filter(
        (ele) => ele.info.state === state && ele.info.City === city
      );
      Set_Sorted_Rides(sorteds);
    }
  };

  

  useEffect(() => {
    console.log(Set_Sorted_Rides);
  }, [Set_Sorted_Rides]);

  useEffect(() => {
    let sorted = sorted_rides();
    Set_Sorted_Rides(sorted);
  }, []);

  console.log("lllllllllll");
  return <Tabs rids={Sorted_Rides} FilterRides={FilterRides}></Tabs>;
};

export default Home;
