import React from "react";
import UseFetch from "./UseFetch";

const FetchYogaData = () => {
  const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
  console.log(data);
  return (
    <>
      {data &&
        data.map((e) => (
          <>
            <li className="list_data">
              <h3>{e.name}</h3>
              <p>
                <strong>Benefits: </strong>
                {e.benefits}
              </p>
              <p>
                <strong>Time duration: </strong>
                {e.time_duration}
              </p>
            </li>
          </>
        ))}
    </>
  );
};

export default FetchYogaData;
