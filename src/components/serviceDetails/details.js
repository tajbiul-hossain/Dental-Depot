import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        for (const singleService of data) {
          if (singleService.id === serviceId) {
            setService(singleService);
          }
        }
      });
  }, []);
  return (
    <div>
      <p>{service.details}</p>
    </div>
  );
};

export default Details;
