import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

const data = useLoaderData();

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

//USING LOADER METHOD
export const githubInfo = async () => {
    const res = await fetch("https://api.github.com/users/ESSARHTHUMAR");
    return res.json();
}
