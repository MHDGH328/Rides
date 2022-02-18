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
      let sorted_city = Sorted_Rides.find((ele) => ele.City === city);
      Set_Sorted_Rides(sorted_city);
    } else if (city === "All City" && state !== "All State") {
      let sorted_state = Sorted_Rides.find((ele) => ele.state === state);
      Set_Sorted_Rides(sorted_state);
    } else if (city !== "All City" && state !== "All State") {
      let sorted = Sorted_Rides.find(
        (ele) => ele.state === state && ele.City === city
      );
      Set_Sorted_Rides(sorted);
    }
  };

  useEffect(() => {
    let sorted = sorted_rides();
    Set_Sorted_Rides(sorted);
  }, [Set_Sorted_Rides]);

  return (
    <Tabs
      rids={Sorted_Rides}
      city={City}
      state={State}
      FilterRides={FilterRides}
    ></Tabs>
  );
};

export default Home;
