import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="card shadow-xl p-4 border-2 space-y-4">
      <figure><img className="h-48 rounded-xl" src={img} alt="Shoes" /></figure>
      <div className="">
        <h2 className="">{title}</h2>
        <p className="text-[#FF3811] my-2">Price: {price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;