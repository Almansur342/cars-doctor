import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data =>{
      setServices(data);
    })
  },[])
  console.log(services)
  return (
    <div>
      <div className="text-center space-y-3 mb-10">
        <h3 className="text-xl font-medium text-[#FF3811]">Services</h3>
        <h2 className="text-4xl font-bold text-[#151515]">Our Service Area</h2>
        <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {
          services.map(service=> <ServiceCard
           key={service._id}
           service = {service}
          
          >
          </ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;