export let Ride = [
    {
        id:'001',
        origin_station_code:23,
        station_path:[23,42,45,48,56,60,77,81,93],
        destination_station_code:93,
        date:1644934930000,
        map_url:'url',
        state:'Damascus',
        City:'mazzuh'
    },
    {
        id:'002',
        origin_station_code:20,
        station_path:[20,39,40,42,54,63,72,88,98],
        destination_station_code:98,
        date:1645021330000,
        map_url:'url',
        state:'Daraa',
        City:'Hrak'
    },
    {
        id:'003',
        origin_station_code:13,
        station_path:[13,25,41,48,59,64,75,81,91],
        destination_station_code:91,
        date:1645712530000,
        map_url:'url',
        state:'Aleppo',
        City:'Aleppo'
    }

];


export let user = {
  station_code:40,
  user_name:'Dhruv Singh',
  profile_key:'url'
}

export let City:any[] = [] ; 
export let State:any[] = [] ; 


export let sorted_rides = () => {
  let Array_dimensional:any[] = [];
  City = [];
  State = [];
  Ride.map((ele)=> {
      let x =10000000000000000000000000000000000000000000;
         City.push(ele.City);
         State.push(ele.state)
      ele.station_path.map((ele)=> {
          let t = Math.abs(ele - user.station_code);
          if (t<x)x=t
      })
      Array_dimensional.push({info:ele , dis:x})
  })
  let sort_dimensional = Array_dimensional.sort((a:any,b:any)=> 
       a.dis - b.dis
  );

  return sort_dimensional;

}


