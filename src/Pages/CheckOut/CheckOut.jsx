import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const { register, handleSubmit, formState: { errors },} = useForm();
  const service = useLoaderData();
  const {title,price,_id,img} = service;
  const {user} = useContext(AuthContext)


  const onSubmit = data =>{
    const email = user?.email;
    const {name,date} = data;
    const booking = {
      customerName : name,
      email,
      date,
      img,
      service:title,
      service_id: _id,
      price: price,
    }
    console.log(booking);
    // console.log(order);
    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('user created');
      }
    })
  }
  return (
    <div>
      <h1>check out: {title}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 rounded">
        <h1 className="text-2xl lg:text-3xl  font-semibold text-center uppercase">Book services</h1>
        <div className="grid grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-base">Name:</span>
          </label>
          <input type="text" placeholder="Name" defaultValue={user?.displayName} name="name" className="input input-bordered"
           {...register("name",)}
          />
          
        </div>

        <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Date:</span>
            </label>
            <input
             type="date"
              
               name="date" 
               className="input input-bordered"
               {...register("date",)}
               />
            {/* <span className="absolute bottom-3 right-4 text-xl" onClick={()=> setShowPassword(!showPassword)}>{
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }</span> */}
            {errors.password && <span className="text-red-500">This field is required</span>}
          </div>
        <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Email:</span>
            </label>
            <input
             type="email"
              placeholder="email"
              defaultValue={user?.email}
               name="email" 
               className="input input-bordered"
               {...register("email",)}
               />
            {/* <span className="absolute bottom-3 right-4 text-xl" onClick={()=> setShowPassword(!showPassword)}>{
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }</span> */}
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
        <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-base">Due amount:</span>
            </label>
            <input
             type="text"
              defaultValue={price}
               
               className="input input-bordered"
               {...register("price",)}
               />
            {/* <span className="absolute bottom-3 right-4 text-xl" onClick={()=> setShowPassword(!showPassword)}>{
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }</span> */}
          </div>
        </div>
       
        <div className="form-control">
          <input className="btn btn-secondary" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;