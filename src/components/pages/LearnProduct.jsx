import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../services/BaseUrl";
import Single from "./Single";

const LearnProduct = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(BASE_URL + "/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        
        setItem(data)
      });
  }, []);

  return <div>
<Single />
 
  </div>;
};

export default LearnProduct;
